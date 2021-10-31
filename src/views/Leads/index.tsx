import { useEffect, useState } from 'react';
import produce from 'immer';

import { Header, List } from '../../components';
import { Lead } from '../../domain/models';
import { LeadService } from '../../services';
import { Layout } from '../../styles';

import { Button } from './styles';
import { ListLeadContext } from '../../contexts';

type LeadsProps = {
  service: LeadService;
};

const Leads = ({ service }: LeadsProps): JSX.Element => {
  const [listLeads, setListLeads] = useState([] as Lead[]);

  useEffect(() => {
    setListLeads(service.load());
  }, []);

  const move = (index: number, status: Lead['status']): void => {
    setListLeads((old) =>
      produce(old, (draft) => {
        const dragged = draft[index];

        dragged.status = status;
      })
    );

    service.update(index, status);
  };

  return (
    <Layout>
      <Header title="Painel de Leads" />

      <Button to="/leads/new">Novo Lead (+)</Button>

      <ListLeadContext.Provider value={{ move }}>
        <List listLeads={listLeads} />
      </ListLeadContext.Provider>
    </Layout>
  );
};

export default Leads;

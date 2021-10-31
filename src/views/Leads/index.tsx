import { useEffect, useState } from 'react';
import { Header, List } from '../../components';
import { Lead } from '../../domain/models';
import { LeadService } from '../../services';
import { Layout } from '../../styles';

import { Button } from './styles';

type LeadsProps = {
  service: LeadService;
};

const Leads = ({ service }: LeadsProps): JSX.Element => {
  const [listLeads, setListLeads] = useState([] as Lead[]);

  useEffect(() => {
    setListLeads(service.load());
  }, []);

  return (
    <Layout>
      <Header title="Painel de Leads" />

      <Button to="/leads/new">Novo Lead (+)</Button>

      <List listLeads={listLeads} />
    </Layout>
  );
};

export default Leads;

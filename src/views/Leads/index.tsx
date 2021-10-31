import { Header, List } from '../../components';
import { Layout } from '../../styles';

import { Button } from './styles';

const Leads = (): JSX.Element => {
  return (
    <Layout>
      <Header title="Painel de Leads" />

      <Button to="/leads/new">Novo Lead (+)</Button>

      <List />
    </Layout>
  );
};

export default Leads;

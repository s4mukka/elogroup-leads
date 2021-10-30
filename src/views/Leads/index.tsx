import { List } from '../../components';

import { Container, Button } from './styles';

const Leads = (): JSX.Element => {
  return (
    <Container>
      <header>
        <img
          src="https://elogroup.com.br/wp-content/uploads/2021/08/Logo-2.svg"
          alt="elogroup"
        />
        <h1>Painel de Leads</h1>
      </header>

      <Button to="/leads/new">Novo Lead (+)</Button>

      <List />
    </Container>
  );
};

export default Leads;

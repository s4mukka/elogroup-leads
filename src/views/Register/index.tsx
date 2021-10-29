import { Input } from '../../components';

import { Container, Button } from './styles';

const Register = (): JSX.Element => (
  <Container>
    <form>
      <img
        src="https://elogroup.com.br/wp-content/uploads/2021/08/Logo-2.svg"
        alt="elogroup"
      />
      <Input type="text" name="user" label="Usuário *" />
      <Input
        type="password"
        name="password"
        label="Password *"
        placeholder="********"
      />
      <Input
        type="confirmPassword"
        name="confirmPassword"
        placeholder="********"
        label="Confirmação Password *"
      />
      <Button type="submit">Registrar</Button>
    </form>
  </Container>
);

export default Register;

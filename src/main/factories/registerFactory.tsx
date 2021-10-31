import { UserService } from '../../services';
import { Register } from '../../views';

export const makeRegisterUser = (): JSX.Element => (
  <Register service={new UserService()} />
);

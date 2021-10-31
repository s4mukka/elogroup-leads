import { User } from '../domain/models';
import { RegisterUser } from '../domain/usecases';

export class UserService implements RegisterUser {
  register = (user: User): void => {
    localStorage.setItem('user', JSON.stringify(user));
  };
}

import { User } from '../domain/models';
import { RegisterUser } from '../domain/usecases';

export class RegisterUserService implements RegisterUser {
  register = (user: User): void => {
    localStorage.setItem('user', JSON.stringify(user));
  };
}

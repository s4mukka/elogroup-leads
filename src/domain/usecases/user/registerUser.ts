import { User } from '../../models';

export interface RegisterUser {
  register: (user: User) => void;
}

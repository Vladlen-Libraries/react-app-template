import { User } from '../../../users/domain/interfaces/User';

export interface AuthResponse extends User {
  token: string;
}

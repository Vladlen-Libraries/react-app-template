import { UserRoleEnum } from '../enums/UserRoleEnum';

export interface User {
  id: number;
  phone: string;
  role: UserRoleEnum;
  first_name?: string;
  last_name?: string;
  email?: string | null;
  is_new: boolean;
  // token: string;
  authed_at?: string;
  created_at: string;
}

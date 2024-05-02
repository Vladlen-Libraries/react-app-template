import { User } from '../interfaces/User';

export class UserNameFormatter {
  public getFullName(user: User): string {
    const names = [user.first_name, user.last_name].filter((n => n != null && n != ''));
    return names.join(' ');
  }
}

const userNameFormatter = new UserNameFormatter();
export default userNameFormatter;

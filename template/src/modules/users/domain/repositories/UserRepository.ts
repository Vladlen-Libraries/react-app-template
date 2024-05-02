import { User } from '../interfaces/User';
import userResource from '../resources/UserResource';
import { UDRepository } from '../../../core/CoreRepository';
import { APIListResponse } from '../../../core/APIListResponse';
import { formatWithMask } from '../../../ud-ui/helpers/format-with-mask';

export class UserRepository extends UDRepository<User, APIListResponse<User>> {
  public isUserNew(user: User | null): boolean {
    return !!user && user.is_new;
  }
  public isPhoneNotExist(phone: string | undefined): Promise<boolean> {
    const formattedPhone = formatWithMask('+{0}0000000000', phone);
    return this.resource('is-phone-exist')
      .create({ phone: formattedPhone })
      .then((response) => !response.isExist)
      .catch(() => true);
  }
}

const userRepository = new UserRepository(userResource);
export default userRepository;

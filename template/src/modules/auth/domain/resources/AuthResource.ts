import { BaseRestResource } from '@snap-alex/domain-js';
import { AxiosRequestHeaders } from 'axios';
import { User } from '../../../users/domain/interfaces/User';
import { AuthCheckCodeDto } from '../interfaces/AuthCheckCodeDto';
import { AuthResponse } from '../interfaces/AuthResponse';
import { AuthSendCodeDto } from '../interfaces/AuthSendCodeDto';
import httpResource from '../../../core/httpResource';

export class AuthResource extends BaseRestResource {
  public getCurrentUser(headers: AxiosRequestHeaders): Promise<User> {
    return this.child('check-token').get({}, { headers });
  }

  public checkCodeAndLogin(data: AuthCheckCodeDto): Promise<AuthResponse> {
    return this.child('login').create(data);
  }

  public sendCode(data: AuthSendCodeDto): Promise<void> {
    return this.child('send-code').create(data);
  }
}

const authResource = new AuthResource(httpResource, 'auth');
export default authResource;

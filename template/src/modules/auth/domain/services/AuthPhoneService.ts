import {AuthSendCodeDto} from "../interfaces/AuthSendCodeDto";
import {AuthCheckCodeDto} from "../interfaces/AuthCheckCodeDto";
import {AuthResponse} from "../interfaces/AuthResponse";
import authService, {AuthService} from "./AuthService";
import authResource, {AuthResource} from "../resources/AuthResource";

export class AuthPhoneService {
  constructor(private aResource: AuthResource, private aService: AuthService) {
  }

  public sendCode(data: AuthSendCodeDto): Promise<void> {
    return this.aResource.sendCode({ phone: data.phone });
  }

  public async login(
    credentials: AuthCheckCodeDto
  ): Promise<AuthResponse | null> {
    const authResponse = await this.aResource.checkCodeAndLogin(credentials);
    await this.aService.setAuthCredentials(authResponse);
    return authResponse;
  }
}

const authPhoneService = new AuthPhoneService(authResource, authService);
export default authPhoneService;

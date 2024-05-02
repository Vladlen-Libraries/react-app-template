import { BaseResource } from '@snap-alex/domain-js';
import { AxiosRequestHeaders } from 'axios';
import { AuthResponse } from '../interfaces/AuthResponse';
import storageService, { StorageService } from '../../../core/StorageService';
import authResource, { AuthResource } from '../resources/AuthResource';
import { User } from '../../../users/domain/interfaces/User';
import httpResource from '../../../core/httpResource';
import { ResponseErrorCode } from '../../../core/enums/ResponseErrorCode';

export class AuthService {
  constructor(
    private userStorageKey: string,
    private tokenStorageKey: string,
    private storage: StorageService,
    private httpRes: BaseResource,
    private authRes: AuthResource
  ) {}

  public async checkAuth(): Promise<AuthResponse | null> {
    const userSession = await this.extractCurrentAuthData();
    if (this.isSessionInvalid(userSession)) {
      return null;
    }
    const user = await this.getCurrentUser(userSession.token);
    if (user) {
      const authResponse = { ...user, token: userSession.token };
      await this.setAuthCredentials(authResponse);
      return authResponse;
    }
    return null;
  }

  public async logout(): Promise<void> {
    await this.storage.setItem(this.userStorageKey, null);
    await this.storage.setItem(this.tokenStorageKey, null);
    this.httpRes.clearHeaders();
  }

  public async setAuthCredentials(
    session: AuthResponse
  ): Promise<AuthResponse> {
    await this.storeUserSession(session);
    this.setAuthHeader(session.token);
    return session;
  }

  private getCurrentUser(token: string): Promise<User | null> {
    const authHeaders = AuthService.createAuthHeaders(token);
    return this.authRes.getCurrentUser(authHeaders).catch((e) => {
      if (e._status === ResponseErrorCode.Unauthorized) {
        return null;
      }
      throw e;
    });
  }

  private async storeUserSession(session: AuthResponse): Promise<AuthResponse> {
    const { token, ...user } = session;
    await this.storage.setItem(this.userStorageKey, user);
    await this.storage.setItem(this.tokenStorageKey, token);
    return session;
  }

  private async extractCurrentAuthData(): Promise<AuthResponse> {
    const token = await this.storage.getItem(this.tokenStorageKey);
    const user = (await this.storage.getItem(this.userStorageKey)) || {};
    return { token, ...user };
  }

  private setAuthHeader(token: string): void {
    const headers = AuthService.createAuthHeaders(token);
    this.httpRes.setHeaders(headers);
  }

  private static createAuthHeaders(token: string): AxiosRequestHeaders {
    return { Authorization: `Bearer ${token}` };
  }

  private isSessionInvalid(session: AuthResponse): boolean {
    return (
      session == null ||
      session.token == null ||
      session.token === '' ||
      session.id == null
    );
  }
}

const authService = new AuthService(
  '@auth_user',
  '@auth_token',
  storageService,
  httpResource,
  authResource
);
export default authService;

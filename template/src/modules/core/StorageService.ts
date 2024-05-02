import CookiesClass, { CookieSetOptions } from 'universal-cookie';
import * as localforage from 'localforage';

export class StorageService {
  constructor(
    private readonly storage: LocalForage,
    private readonly Cookies: typeof CookiesClass
  ) {}

  public async setItem<T = any>(key: string, data: T): Promise<T> {
    await this.storage.setItem(key, data);
    return data;
  }

  public getItem<T = any>(key: string): Promise<T | null> {
    return this.storage.getItem<T>(key);
  }

  public setCookie<T = any>(
    key: string,
    data: T,
    config?: CookieSetOptions
  ): T {
    const cookies = new this.Cookies();
    cookies.set(key, data, config);
    return data;
  }

  public getCookie<T = string>(key: string): T {
    const cookies = new this.Cookies();
    return cookies.get(key);
  }

  public getStorageCore(): LocalForage {
    return this.storage;
  }

  public getCookiesCore(): typeof CookiesClass {
    return this.Cookies;
  }
}

const storageService = new StorageService(localforage, CookiesClass);
export default storageService;

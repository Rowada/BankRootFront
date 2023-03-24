import { Injectable } from '@angular/core';

const USER_key = 'Token';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_key);
    window.sessionStorage.setItem(USER_key, user.access_token);
  }

  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_key);
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //   return {};
  // }

  public isLoggedIn(): boolean {
    const token = window.sessionStorage.getItem(USER_key);
    if (token) {
      return true;
    }
    return false;
  }
}

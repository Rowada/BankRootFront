import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' + this.getToken(String(sessionStorage.getItem('auth-user'))),
    }),
  };
  //
  // getToken(token: string) {
  //   const tokenUser = JSON.parse(token);
  //   console.log(tokenUser);
  //   const accessToken = tokenUser['access_token'];
  //
  //   return accessToken;
  // }
  getToken(token: string): string {
    let accessToken = '';
    try {
      const tokenUser = JSON.parse(token);
      if (
        typeof tokenUser === 'object' &&
        tokenUser !== null &&
        'access_token' in tokenUser
      ) {
        accessToken = tokenUser.access_token;
      } else {
        console.error('Invalid token format');
      }
    } catch (error) {
      console.error('Failed to parse token', error);
    }
    return accessToken;
  }

  getUsers() {
    return this.http.get('/user', this.httpOptions);
  }

  signUp(user: any) {
    return this.http.post('/auth/register', user, this.httpOptions);
  }

  // login(mail: string, password: string): Observable<any> {
  //   return this.http.post('/auth/login', { mail, password });
  // }

  getUserById(id: number) {
    return this.http.get(`user/${id}`, this.httpOptions);
  }

  getProfile() {
    return this.http.get('/user/find/profile', this.httpOptions);
  }
}

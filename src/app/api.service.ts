import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers() {
    return this.http.get('user/1', this.httpOptions);
  }

  signUp(user: any) {
    return this.http.post('/auth/register', user, this.httpOptions);
  }
}

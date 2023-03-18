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
    }),
  };

  getUsers() {
    return this.http.get('/user', this.httpOptions);
  }

  signUp(user: any) {
    return this.http.post('/auth/register', user, this.httpOptions);
  }

  login(mail: string, password: string): Observable<any> {
    return this.http.post('/auth/login', { mail, password }, this.httpOptions);
  }

  // logout(): Observable<any> {
  //   return this.http.post('');
  // }
}

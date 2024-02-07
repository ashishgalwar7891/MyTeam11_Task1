import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post('http://localhost:8080/api/v1/auth/register', user);
  }

  login(user: any) {
    return this.http.post('http://localhost:8080/api/v1/auth/login', user);
  }
}

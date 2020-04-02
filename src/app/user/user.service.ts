import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  auth(email, password) {
    return this.httpClient
      .post('http://lesson-4.iilinov-n.myjino.ru/api/auth/login', {
        email: email,
        password: password
      })
  }
}

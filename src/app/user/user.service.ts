import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HttpRequestService } from './../services/http-request.service';

import { loginRes, registerRes } from './user';

@Injectable()
export class UserService {

  constructor(private http: HttpRequestService) { }

  login(loginData): Observable<loginRes> {
    return this.http.post('user/login', loginData);
  }

  register(registerData): Observable<registerRes> {
    return this.http.post('user/signup', registerData);
  }

}

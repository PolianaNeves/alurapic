import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

import { UserService } from './../user/user.service';

const API_URL = environment.ApiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userSevice: UserService) { }

  authenticate(userName: string, password: string) {
    return this.http
      .post(API_URL + '/user/login', { userName, password }, {observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userSevice.setToken(authToken);
      }));
  }
}

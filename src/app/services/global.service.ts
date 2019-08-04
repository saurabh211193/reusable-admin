import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { CookieServiceService } from './cookie-service.service';

export class UserConfig {
  is_authenticated = false;
  cartInfo: any[];
  createdAt: string;
  email: string;
  fN: string;
  img: string;
  isDeleted = false;
  isVerified = true;
  lN: string;
  pNo: string;
  token: string;
  updatedAt: string;
  _id: string;
}

@Injectable()
export class GlobalService {

  private userDetails = new Subject<any>();
  UserDeatils = this.userDetails.asObservable();
  constructor(private cookieService: CookieServiceService) { }


  getUserCredential() {
    if (this.cookieService.getCookie('user')) {
      return JSON.parse(this.cookieService.getCookie('user'));
    }
  }

  setUserCredential(userCredential) {
    this.cookieService.deleteCookie('user');
    this.userDetails.next(userCredential);
    this.cookieService.setCookie('user', JSON.stringify(userCredential), 7);
  }

  deleteUserCredential() {
    this.cookieService.deleteCookie('user');
  }

}

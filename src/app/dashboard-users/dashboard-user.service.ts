import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HttpRequestService } from '../services/http-request.service';

import { userListingRes } from './dashboard-users';

@Injectable()
export class DashboardUserService {

  constructor(private http: HttpRequestService) { }

  usersListing(): Observable<userListingRes> {
    return this.http.get('admin/allusers');
  }
}

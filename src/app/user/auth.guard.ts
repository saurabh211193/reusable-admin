import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../services/global.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private globalService: GlobalService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(this.globalService.getUserCredential());
    if (this.globalService.getUserCredential()) {
      return true;
    }
    this.globalService.deleteUserCredential();
    this.router.navigate(['']);
    return false;

  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

import { S3Service } from './s3.service';

@Injectable()
export class AwsCredentialGuard implements CanActivate {
  constructor(private router: Router, private s3Service: S3Service) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('credential');
    const credential = this.s3Service.getCredentials();
    if (credential) {
      return true;
    }

    this.router.navigate(['../dashboard/aws/configure']);
    return false;
  }
}


import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpParams, HttpRequest,
  HttpErrorResponse, HttpHandler, HttpEvent, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';

import { GlobalService } from '../services/global.service';
import { LoaderService } from '../shared/loader.service';

@Injectable()
export class HttpRequestService {
  private static baseUrl: string;
  private protocol: string = window.location.protocol;
  private domain: string = environment.domain;
  private userCredential: any;

  constructor(private http: HttpClient, private globalService: GlobalService, private loaderService: LoaderService) {
    HttpRequestService.baseUrl = `${this.protocol}//${this.domain}`;
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   HttpRequestService.baseUrl = `${this.protocol}//${this.domain}`;
  //   this.loaderService.show();
  //   console.log('show');
  //   const authReq = req.clone({
  //     // headers: req.headers.set('Authorization', 'token')
  //   });
  //   return next.handle(authReq).do(
  //     (response) => {
  //       if (response instanceof HttpResponse) {
  //         // this.loaderService.hide();
  //         console.log('show');
  //       }
  //     },
  //     (error) => {
  //       // this.loaderService.hide();
  //       console.log('show');
  //     });
  // }

  get(url: string, queryParams?: HttpParams): Observable<any> {
    // console.log('get')
    const reqOptions = new Object();
    this.userCredential = this.globalService.getUserCredential();

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('token', this.userCredential.token);

    reqOptions['headers'] = headers;

    reqOptions['params'] = queryParams;

    return this.http.get(`${HttpRequestService.baseUrl}/` + url, reqOptions);
  }

  post(url: string, body?: any, queryParams?: HttpParams): Observable<any> {
    const reqOptions = new Object();
    this.userCredential = this.globalService.getUserCredential();

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    reqOptions['headers'] = headers;

    reqOptions['params'] = queryParams;

    return this.http.post(`${HttpRequestService.baseUrl}/` + url, body, reqOptions);

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}

export interface RequestOtions {
  headers: HttpHeaders;
  observe: string;
  params: HttpParams;
}

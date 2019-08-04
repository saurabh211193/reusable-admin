import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/do';


import { LoaderService } from '../shared/loader.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
    });
    this.loaderService.show();
    return next.handle(authReq).do(
      (res) => {
        if (res instanceof HttpResponse) {
          this.loaderService.hide();
        }
      },
      (err) => {
        this.loaderService.hide();
      }
    );
  }
}

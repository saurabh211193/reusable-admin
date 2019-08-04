import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class LoaderService {
  private loaderSubject = new Subject<boolean>();
  loaderState$ = this.loaderSubject.asObservable();
  constructor() {
  }

  show() {
    this.loaderSubject.next(true);
  }
  hide() {
    this.loaderSubject.next(false);
  }

}

export class LoaderOptions {
  isActive = false;
}

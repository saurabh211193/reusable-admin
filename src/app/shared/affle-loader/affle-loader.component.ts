import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-affle-loader',
  templateUrl: './affle-loader.component.html',
  styleUrls: ['./affle-loader.component.css']
})
export class AffleLoaderComponent implements OnInit, OnDestroy {

  isActive: boolean;
  private loaderSub$: Subscription;
  constructor(private loaderService: LoaderService) {
  }


  ngOnInit() {
    this.loaderSub$ = this.loaderService.loaderState$.subscribe((isActive: boolean) => {
      this.isActive = isActive;
    });
  }

  ngOnDestroy() {
    this.loaderSub$.unsubscribe();
  }



}

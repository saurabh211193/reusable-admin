import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit } from '@angular/core';

import { DynamicComponentService } from './shared/dynamic-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('dclWrapper', { read: ViewContainerRef })
  dclWrapper: ViewContainerRef;

  constructor() {

  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    DynamicComponentService.dclWrapper = this.dclWrapper;
  }
}

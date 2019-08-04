import { Component, OnInit, AfterContentInit, QueryList, ContentChildren } from '@angular/core';


import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.css']
})
export class AccordionContainerComponent implements OnInit, AfterContentInit {

  @ContentChildren(AccordionComponent) accordions: QueryList<AccordionComponent>;

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
    console.log(this.accordions.length);
  }

}

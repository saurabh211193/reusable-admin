import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() active: boolean;
  @Input() activeInitially = false;

  constructor() { }

  ngOnInit() {
    this.active = this.activeInitially;
  }

  toggleAccordion() {
    this.active = !this.active;
  }


}

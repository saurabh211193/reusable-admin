import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionContainerComponent } from './accordion-container/accordion-container.component';

@NgModule({
  imports: [
  ],
  exports: [AccordionComponent, AccordionContainerComponent],
  declarations: [AccordionComponent, AccordionContainerComponent],
})
export class AccordionModule { }

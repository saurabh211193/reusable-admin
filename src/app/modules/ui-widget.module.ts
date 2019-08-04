import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from './accordion/accordion.module';

import { AccordionComponent } from './accordion/accordion/accordion.component';
import { AccordionContainerComponent } from './accordion/accordion-container/accordion-container.component';

@NgModule({
  imports: [

  ],
  exports: [
    AccordionModule
  ],
  declarations: [
  ]
})
export class UiWidgetModule { }

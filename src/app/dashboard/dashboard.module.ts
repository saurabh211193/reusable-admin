import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UiWidgetModule } from '../modules/ui-widget.module';

import { DasboardComponent } from './dasboard/dasboard.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';


@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    UiWidgetModule
  ],
  declarations: [DasboardComponent, SidebarNavComponent]
})

export class DashboardModule { }

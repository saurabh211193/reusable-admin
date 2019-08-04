import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DashboardUsersRoutingModule } from './dashboard-users-routing.module';
import { PipeModule } from '../pipes/pipe.module';

import { ListingComponent } from './listing/listing.component';

import { DashboardUserService } from './dashboard-user.service';

@NgModule({
  imports: [
    SharedModule,
    DashboardUsersRoutingModule,
    PipeModule
  ],
  declarations: [ListingComponent],
  providers: [DashboardUserService]
})
export class DashboardUsersModule { }

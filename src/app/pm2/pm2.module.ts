import { NgModule } from '@angular/core';
import { LogsComponent } from './logs/logs.component';

import { Pm2RoutingModule } from './pm2-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProcessGraphComponent } from './process-graph/process-graph.component';

@NgModule({
  imports: [
    Pm2RoutingModule,
    SharedModule
  ],
  declarations: [
    LogsComponent,
    ProcessGraphComponent
  ]
})
export class Pm2Module { }

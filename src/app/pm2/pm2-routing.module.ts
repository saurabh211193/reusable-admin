import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogsComponent } from './logs/logs.component';
import { ProcessGraphComponent } from './process-graph/process-graph.component';

export const routes: Routes = [
  { path: '', redirectTo: 'logs', pathMatch: 'full' },
  { path: 'logs', component: LogsComponent },
  { path: 'logs/:processNo', component: ProcessGraphComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class Pm2RoutingModule { }

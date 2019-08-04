import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { dashboardRoutes } from './dashboard-routes';

import { DasboardComponent } from './dasboard/dasboard.component';

export const routes: Routes = [
  { path: '', component: DasboardComponent, children: dashboardRoutes }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule { }

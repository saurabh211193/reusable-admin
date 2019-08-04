import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
    { path: '', redirectTo: 'aws', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/dashboard-users/dashboard-users.module#DashboardUsersModule' },
    { path: 'aws', loadChildren: 'app/aws/aws.module#AwsModule' },
    { path: 'pm2', loadChildren: 'app/pm2/pm2.module#Pm2Module' }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwsConfiureComponent } from './aws-confiure/aws-confiure.component';
import { S3Component } from './s3/s3.component';
import { S3BucketDataComponent } from './s3-bucket-data/s3-bucket-data.component';
import { S3BucketDataFilesComponent } from './s3-bucket-data-files/s3-bucket-data-files.component';

import { AwsCredentialGuard } from './aws-credential.guard';


export const routes: Routes = [
  { path: '', redirectTo: 's3', pathMatch: 'full' },
  { path: 'configure', component: AwsConfiureComponent },
  // { path: 's3', canActivate: [AwsCredentialGuard], component: S3Component },
  { path: 's3', component: S3Component },
  { path: 's3/:bucket', component: S3BucketDataComponent },
  { path: 's3/:bucket/:directory', component: S3BucketDataFilesComponent }
  // { path: '**', component: S3BucketDataComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AwsRoutingModule { }

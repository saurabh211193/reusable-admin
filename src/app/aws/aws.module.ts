import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AwsRoutingModule } from './aws-routing.module';
import { PipeModule } from '../pipes/pipe.module';

import { AwsConfiureComponent } from './aws-confiure/aws-confiure.component';
import { S3Component } from './s3/s3.component';

import { S3Service } from './s3.service';
import { S3BucketDataComponent } from './s3-bucket-data/s3-bucket-data.component';
import { S3BucketDataFilesComponent } from './s3-bucket-data-files/s3-bucket-data-files.component';

import { AwsCredentialGuard } from './aws-credential.guard';
import { S3AddObjectComponent } from './s3-add-object/s3-add-object.component';


@NgModule({
  imports: [
    SharedModule,
    AwsRoutingModule,
    PipeModule
  ],
  declarations: [AwsConfiureComponent, S3Component, S3BucketDataComponent, S3BucketDataFilesComponent, S3AddObjectComponent],
  providers: [S3Service, AwsCredentialGuard],
  entryComponents: [S3AddObjectComponent]
})
export class AwsModule { }

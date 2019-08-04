import { NgModule } from '@angular/core';

import { FillPipe } from './fill.pipe';
import { KeysPipe } from './keys.pipe';
import { ListS3DataPipe } from './list-s3-data.pipe';

@NgModule({
  imports: [
  ],
  exports: [
    KeysPipe,
    FillPipe,
    ListS3DataPipe
  ],
  declarations: [
    KeysPipe,
    FillPipe,
    ListS3DataPipe
  ]
})
export class PipeModule { }

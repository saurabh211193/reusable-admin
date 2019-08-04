import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AffleInputComponent } from './affle-input/affle-input.component';
import { AffleHeaderComponent } from './affle-header/affle-header.component';
import { AffleFooterComponent } from './affle-footer/affle-footer.component';
import { AffleLoaderComponent } from './affle-loader/affle-loader.component';

import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

import { DynamicComponentService } from './dynamic-component.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AffleHeaderComponent,
    AffleFooterComponent,
    AffleInputComponent,
    AlertDialogComponent
  ],
  declarations: [AffleInputComponent, AffleHeaderComponent, AffleFooterComponent, AlertDialogComponent],
  providers: [DynamicComponentService],
  entryComponents: [AlertDialogComponent]
})
export class SharedModule { }

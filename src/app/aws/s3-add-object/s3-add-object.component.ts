import { Component, OnInit, Input, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { GlobalValidator, FormErrors, ValidationMessages } from '../../global-validator';

import { S3Service } from '../s3.service';
import { DynamicComponentData } from '../../shared/dynamic-component.service';


@Component({
  selector: 'app-s3-add-object',
  templateUrl: './s3-add-object.component.html',
  styleUrls: ['./s3-add-object.component.css']
})
export class S3AddObjectComponent implements OnInit, DynamicComponentData {
  @Input() notifier$: Subject<any>;
  @Input() data: any;

  addObjectForm: FormGroup;
  public formErrors: FormErrors = {
    'passcode': ''
  };
  public validationMessages: ValidationMessages = {
    'passcode': {
      'required': 'Passcode is required',
    }
  };

  file: any;
  edit: boolean;
  editMetaData: any;
  currencies = [{ value: 'Rupee', symbol: 'Rs' }, { value: 'Dollar', symbol: '$' }];
  constructor(private fb: FormBuilder, private s3Service: S3Service) {
  }


  ngOnInit() {
    console.log(this.data);
    this.edit = this.data.edit;
    if (this.edit) {
      this.buildEditForm();
    } else {
      this.buildForm();
    }

  }

  buildEditForm() {
    console.log(this.data.metaData);
    const name = this.data.metaData.name ? this.data.metaData.name : '';
    const passcode = this.data.metaData.passcode ? this.data.metaData.passcode : '';
    const version = this.data.metaData.version ? this.data.metaData.version : '';
    const imageid = this.data.metaData.imageid ? this.data.metaData.imageid : '';
    const currencySymbol = this.data.metaData.currencysymbol ? this.data.metaData.currencysymbol : '';

    this.addObjectForm = this.fb.group({
      name: [name],
      passcode: [passcode, Validators.compose([Validators.required])],
      version: [version],
      image: [imageid],
      currencySymbol: [currencySymbol]
    });

    this.addObjectForm.valueChanges.subscribe(
      (data) => {
        this.formErrors = GlobalValidator.validateForm(this.addObjectForm, this.validationMessages);
      }
    );
  }

  buildForm() {
    this.addObjectForm = this.fb.group({
      name: [''],
      passcode: ['', Validators.compose([Validators.required])],
      version: [''],
      image: [''],
      currencySymbol: ['']
    });

    this.addObjectForm.valueChanges.subscribe(
      (data) => {
        this.formErrors = GlobalValidator.validateForm(this.addObjectForm, this.validationMessages);
      }
    );
  }



  uploadFile(event) {
    this.file = event.srcElement.files;
  }

  addEditSubmit() {
    if (!this.file && !this.edit) {
      return;
    }
    if (!this.edit) {
      this.addObject();
    } else {
      this.editObject();
    }
  }

  addObject() {
    if (this.addObjectForm.invalid) {
      this.formErrors = GlobalValidator.validateForm(this.addObjectForm, this.validationMessages, true);
      return;
    }
    this.addObjectForm.value.file = this.file;
    this.addObjectForm.value.bucket = this.data.bucket;
    this.addObjectForm.value.directory = this.data.directory;

    this.s3Service.uploadFile(this.addObjectForm.value).then(
      (data) => {
        console.log(data);
        this.notifier$.next(true);
        this.notifier$.complete();
      },
      (err) => {
        console.log(err);
        this.notifier$.next(false);
        this.notifier$.complete();
      }
    );
  }

  editObject() {
    if (this.addObjectForm.invalid) {
      this.formErrors = GlobalValidator.validateForm(this.addObjectForm, this.validationMessages, true);
      return;
    }

    this.addObjectForm.value.bucket = this.data.bucket;
    this.addObjectForm.value.path = this.data.Key;
    // this.addObjectForm.value.key = this.data.key;
    this.addObjectForm.value.directory = this.data.directory;
    this.addObjectForm.value.key = this.data.metaData.passcode;

    this.s3Service.copyFile(this.addObjectForm.value).then(
      (data) => {
        console.log(data);
        this.notifier$.next(true);
        this.notifier$.complete();
      }, (err) => {
        console.log(err);
        this.notifier$.next(false);
        this.notifier$.complete();
      }
    );
  }

  close() {
    this.notifier$.complete();
  }

}


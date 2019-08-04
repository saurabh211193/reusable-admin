import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { GlobalValidator, FormErrors, ValidationMessages } from '../../global-validator';

import { S3Service } from '../s3.service';

@Component({
  selector: 'app-aws-confiure',
  templateUrl: './aws-confiure.component.html',
  styleUrls: ['./aws-confiure.component.css']
})
export class AwsConfiureComponent implements OnInit {

  public awsConfigureForm: FormGroup;
  public formErrors: FormErrors = {
    'accessKeyId': '',
    'secretAccessKey': '',
    'region': ''
  };
  public validationMessages: ValidationMessages = {
    'accessKeyId': {
      'required': 'Access Key Id is required',
    },
    'secretAccessKey': {
      'required': 'Secret Access Key is required',
    },
    'region': {
      'required': 'Region is required',
    }
  };

  constructor(private fb: FormBuilder, private s3Service: S3Service, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const credential = this.s3Service.getCredentials();
    if (credential) {
      this.awsConfigureForm = this.fb.group({
        accessKeyId: [credential.accessKeyId, Validators.compose([Validators.required])],
        secretAccessKey: [credential.secretAccessKey, Validators.compose([Validators.required])],
        region: [credential.region, Validators.compose([Validators.required])]
      });
    } else {
      this.awsConfigureForm = this.fb.group({
        accessKeyId: ['', Validators.compose([Validators.required])],
        secretAccessKey: ['', Validators.compose([Validators.required])],
        region: ['', Validators.compose([Validators.required])]
      });
    }

    this.awsConfigureForm.valueChanges.subscribe(
      (data) => {
        this.formErrors = GlobalValidator.validateForm(this.awsConfigureForm, this.validationMessages);
      }
    );
  }

  configureAws() {
    if (this.awsConfigureForm.invalid) {
      this.formErrors = GlobalValidator.validateForm(this.awsConfigureForm, this.validationMessages, true);
      return;
    } else {
      this.s3Service.saveCredentials(this.awsConfigureForm.value);
      this.router.navigate(['../s3'], { relativeTo: this.route });
      return;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { GlobalValidator, FormErrors, ValidationMessages } from '../../global-validator';

import { UserService } from '../user.service';
import { DynamicComponentService } from '../../shared/dynamic-component.service';

import { AlertDialogComponent, AlertDialogOptionsI } from '../../shared/alert-dialog/alert-dialog.component';

import { registerRes } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public formErrors: FormErrors = {
    'fN': '',
    'lN': '',
    'email': '',
    'pNo': '',
    'pwd': ''
  };
  public validationMessages: ValidationMessages = {
    'fN': {
      'required': 'First name is required',
    },
    'lN': {
      'required': 'Last name is required',
    },
    'email': {
      'required': 'Email is required',
      'pattern': 'Email is not valid'
    },
    'pNo': {
      'required': 'Phone No. is required',
      'pattern': 'Phone No. not valid',
      'minlength': 'Phone No. should be of 10 digits',
      'maxlength': 'Phone No. should be of 10 digits'
    },
    'pwd': {
      'required': 'Phone No. is required',
    }
  };

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private dycomService: DynamicComponentService,
    private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.registerForm = this.fb.group({
      'fN': ['', Validators.compose([Validators.required])],
      'lN': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern(GlobalValidator.EMAIL_REGEXP)])],
      'pNo': ['', Validators.compose([Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(GlobalValidator.PHONE_REGEX)])],
      'pwd': ['', Validators.compose([Validators.required])]
    });

    this.registerForm.valueChanges.subscribe(
      (data) => {
        this.formErrors = GlobalValidator.validateForm(this.registerForm, this.validationMessages);
      }
    );
  }

  public registerSubmit() {
    if (this.registerForm.invalid) {
      this.formErrors = GlobalValidator.validateForm(this.registerForm, this.validationMessages, true);
      return;
    } else {
      this.userService.register(this.registerForm.value).subscribe(
        (res: registerRes) => {
          let options: AlertDialogOptionsI;
          if (res.statusCode === 200) {
            options = {
              title: 'Success',
              message: res.message,
              confirmText: 'OK',
            };
          } else {
            options = {
              title: 'Error',
              message: res.message,
              confirmText: 'OK',
            };
          }
          this.dycomService.loadComponent(AlertDialogComponent, options).subscribe(
            (data) => {
              if (res.statusCode === 200 && data) {
                this.router.navigate(['']);
              }
            }
          );
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}

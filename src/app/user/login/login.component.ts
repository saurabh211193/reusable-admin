import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { GlobalValidator, FormErrors, ValidationMessages } from '../../global-validator';

import { UserService } from '../user.service';
import { DynamicComponentService } from '../../shared/dynamic-component.service';
import { GlobalService } from '../../services/global.service';

import { AlertDialogComponent, AlertDialogOptionsI } from '../../shared/alert-dialog/alert-dialog.component';

import { loginData, loginRes } from '../user.d';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public formErrors: FormErrors = {
    'email': '',
    'pwd': ''
  };
  public validationMessages: ValidationMessages = {
    'email': {
      'required': 'Email is required',
      'pattern': 'Email is not valid'
    },
    'pwd': {
      'required': 'Password is required',
    }
  };

  public data: loginData = {
    rememberMe: false
  };
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private dyComService: DynamicComponentService,
    private router: Router,
    private globalService: GlobalService) {
    this.globalService.deleteUserCredential();
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(GlobalValidator.EMAIL_REGEXP)])],
      'pwd': ['', Validators.compose([Validators.required])]
    });

    this.loginForm.valueChanges.subscribe(
      (data) => {
        this.formErrors = GlobalValidator.validateForm(this.loginForm, this.validationMessages);
      }
    );
  }

  public loginSubmit() {
    if (this.loginForm.invalid) {
      this.formErrors = GlobalValidator.validateForm(this.loginForm, this.validationMessages, true);
      return;
    } else {
      this.userService.login(this.loginForm.value).subscribe(
        (res: loginRes) => {
          if (res.statusCode !== 200) {
            let options: AlertDialogOptionsI;
            options = {
              title: 'Error',
              message: res.message,
              confirmText: 'OK',
              cancelText: ''
            };
            this.dyComService.loadComponent(AlertDialogComponent, options).subscribe(
              (data) => {
                console.log(data);
              }
            );
          } else {
            this.globalService.setUserCredential(res.data);
            this.router.navigate(['dashboard']);
          }
        },
        (err) => {
          console.error(err);
        }
      );

    }
  }

}

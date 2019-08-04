import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

// import { HttpRequestService } from '../services/http-request.service';
import { UserService } from './user.service';

import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
  providers: [UserService]
})
export class UserModule { }

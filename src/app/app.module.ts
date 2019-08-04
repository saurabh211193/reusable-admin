import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AffleLoaderComponent } from './shared/affle-loader/affle-loader.component';

import { AuthGuard } from './user/auth.guard';

import { DynamicComponentService } from './shared/dynamic-component.service';
import { HttpRequestService } from './services/http-request.service';
import { GlobalService } from './services/global.service';
import { CookieServiceService } from './services/cookie-service.service';

import { AppHttpInterceptor } from './services/http-interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderService } from './shared/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    AffleLoaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    HttpRequestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    GlobalService,
    CookieServiceService,
    AuthGuard,
    DynamicComponentService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

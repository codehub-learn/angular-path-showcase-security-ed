import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JWTRoutingModule} from "./j-w-t-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {JWTComponent} from "./j-w-t.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthenticationInterceptor} from "./interceptors/authentication.interceptor";



@NgModule({
  declarations: [
    JWTComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    JWTRoutingModule,
    ReactiveFormsModule
  ],
  providers: []

})
export class JwtModule { }

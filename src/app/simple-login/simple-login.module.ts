import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {SimpleLoginRoutingModule} from "./simple-login-routing.module";
import {SimpleLoginComponent} from "./simple-login.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SimpleLoginComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SimpleLoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class SimpleLoginModule { }

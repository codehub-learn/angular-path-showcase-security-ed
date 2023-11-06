import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SimpleLoginComponent} from "./simple-login.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthenticationService} from "./services/authentication.service";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {UnauthenticatedGuard} from "./guards/unauthenticated.guard";

const routes: Routes = [
  {
    path: "",
    component: SimpleLoginComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: "login",
        component: LoginComponent,
        canActivate: [UnauthenticatedGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleLoginRoutingModule { }

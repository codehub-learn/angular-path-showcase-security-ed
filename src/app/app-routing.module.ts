import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {LoginComponent} from "./modules/login/login.component";
import {AuthenticationGuard} from "./shared/guard/authentication.guard";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "simple-login",
    loadChildren: () => import("./simple-login/simple-login.module").then((m) => m.SimpleLoginModule)
  },
  {
    path: "jwt",
    loadChildren: () => import("./simple-login/simple-login.module").then((m) => m.SimpleLoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

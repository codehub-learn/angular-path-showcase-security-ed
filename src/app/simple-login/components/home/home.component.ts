import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private authenticationService: AuthenticationService, private router: Router){
  }

  logout() {
    this.authenticationService.logout().subscribe((result) => {
      this.router.navigate(["simple-login", "login"]);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    let credentials = {username: "admin", password: "admin"};
    this.authenticationService.login(credentials).subscribe((result) => {
      console.log(result);
    });
  }
}

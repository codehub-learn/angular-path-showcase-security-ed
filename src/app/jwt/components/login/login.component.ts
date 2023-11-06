import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginCredentials!: FormGroup

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router){

  }

  submit() {
    let username = this.username?.value;
    let password = this.password?.value;
    this.authenticationService.login(username, password).subscribe((result) => {
      if(result){
        this.router.navigate(["jwt", 'home']);
      } else {
        alert("wrong credentials!");
      }
    });
  }

  ngOnInit(): void {
    this.loginCredentials = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required,]]
    });
  }

  get username() {
    return this.loginCredentials.get('username');
  }

  get password() {
    return this.loginCredentials.get('password');
  }
}

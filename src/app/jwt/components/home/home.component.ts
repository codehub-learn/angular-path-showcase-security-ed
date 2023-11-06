import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {SampleDataService} from "../../services/sample-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private authenticationService: AuthenticationService, private router: Router, private sampleDataService: SampleDataService){
  }

  logout() {
    this.authenticationService.logout().subscribe((result) => {
      this.router.navigate(["jwt", "login"]);
    });
  }

  ngOnInit(): void {
    this.sampleDataService.getPublicSampleData().subscribe((data) => {
      console.log(data)
    });

    this.sampleDataService.getAdminSampleData().subscribe((data) => {
      console.log(data)
    });
  }
}

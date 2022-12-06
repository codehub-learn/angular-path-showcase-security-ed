import { Component, OnInit } from '@angular/core';
import {SampleDataService} from "../../shared/services/sample-data.service";
import {AuthenticationService} from "../../shared/services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sampleDataService: SampleDataService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.sampleDataService.getSampleData().subscribe((result) => {
      console.log(result)
    })
  }

  logout() {
    this.authenticationService.logout();
  }
}

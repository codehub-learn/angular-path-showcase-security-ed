import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  private baseUrl = "http://localhost:8080/test";

  constructor(private http: HttpClient) {
  }

  getSampleData() {
    return this.http.get(this.baseUrl);
  }

/*
   getSampleData() {
    let token = localStorage.getItem("jwt_token") || "";
    return this.http.get(this.baseUrl, {
      headers: {"Authorization": "Bearer " + token}
    });
  }
  */
}

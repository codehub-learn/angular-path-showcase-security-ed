import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  private url = "http://localhost:8080/api/data/";


  constructor(private http: HttpClient) {
  }

  getPublicSampleData() {
    return this.http.get<any>(this.url + "all");
  }

  getAdminSampleData() {
    return this.http.get<any>(this.url + "admin").pipe(
      catchError((error) => {
        console.log("error")
        return of(false);
      })
    );
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, of, throwError} from "rxjs";

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
      catchError(this.handleHttpError)
    );
  }

  getUserSampleData() {
    return this.http.get<any>(this.url + "user").pipe(
      catchError(this.handleHttpError)
    );
  }

  getModeratorSampleData() {
    return this.http.get<any>(this.url + "moderator").pipe(
      catchError(this.handleHttpError)
    );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401){
      // handle 401 -> token expired, request new token
    }
    // handle other errors
    return throwError(error);
  }

}

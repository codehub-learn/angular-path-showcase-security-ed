import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private username = "codehub";
  private password = "codehub1234";

  constructor() { }

  login(username: string, password: string): Observable<boolean>{
    if(username === this.username && password === this.password){
      localStorage.setItem("authenticated", "true");
      return of(true);
    }
    return of(false);
  }

  logout(){
    localStorage.removeItem("authenticated");
    return of(true);
  }

  isAuthenticated(){
    let isAuthenticated = localStorage.getItem("authenticated");
    return isAuthenticated === "true";
  }
}

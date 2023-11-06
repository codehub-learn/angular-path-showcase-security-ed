import {Injectable} from '@angular/core';
import {catchError, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticationUrl = "http://localhost:8080/api/auth/authenticate";

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.authenticationUrl,
      {username: username, password: password},
      {observe: 'response'}).pipe(
      tap((response) => {
        this.setToken(response.body.accessToken);
      }),
      catchError((error) => {
        console.error(error);
        return of(false);
      })
    );
  }

  logout() {
    localStorage.removeItem("authenticated");
    return of(true);
  }

  isAuthenticated() {
    let isAuthenticated = localStorage.getItem("authenticated");
    return isAuthenticated === "true";
  }

  private setToken(jwt: string) {
    localStorage.setItem("jwt_token", jwt);
  }
}

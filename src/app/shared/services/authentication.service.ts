import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = "http://localhost:8080/authenticate";
  private refreshTokenUrl = "http://localhost:8080/refresh-token";
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
  }

  login(credentials: any) {
    return this.http.post(this.baseUrl, {username: credentials.username, password: credentials.password}).pipe(
      tap((response: any) => {
        this.setTokens(response);
        this.router.navigate(["home"])
      })
    );
  }

  logout() {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("jwt_refresh_token");
    this.router.navigate(["login"])
  }

  public isAuthenticated() {
    if(this.isJwtTokenExpired()){
      if(this.isRefreshTokenExpired()){
        return false;
      } else {
        this.refreshAuthentication().subscribe();
      }
    }
    return true;
  }

  public isRefreshTokenExpired() {
    let jwt_refresh_token = localStorage.getItem("jwt_refresh_token");
    if (jwt_refresh_token) {
      return this.jwtHelper.isTokenExpired(jwt_refresh_token);
    }
    return true;
  }

  public refreshAuthentication() {
    // this method is better to be used asynchronously to refresh the authentication
    return this.http.post<any>(
      this.refreshTokenUrl, {refreshToken: localStorage.getItem("jwt_refresh_token")})
      .pipe(tap((response: any) => this.setTokens(response.body)));
  }

  private setTokens(authenticationResult: any) {
    localStorage.setItem('jwt_token', authenticationResult.access_token);
    localStorage.setItem('jwt_refresh_token', authenticationResult.refresh_token);
  }

  private isJwtTokenExpired(): boolean {
    let jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      return this.jwtHelper.isTokenExpired(jwt_token);
    }
    return true;
  }
}

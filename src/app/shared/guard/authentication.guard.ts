import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // case 1: user is authenticated -> return true
    // case 2.1: jwt is expired -> use refresh token to receive new jwt
    // case 2.2: jwt is expired, refresh token is expired -> ask credentials by the user
    // case 3: user is not authenticated -> ask credentials by the user
    // see authentication service isAuthenticated method to know how these cases are dealt with
    if (this.authenticationService.isAuthenticated()){
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }

}

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    let jwt_token = localStorage.getItem("jwt_token");
    let clonedRequest = request.clone({
      headers: request.headers.set("Authorization", "Bearer " + jwt_token)
    });
    return next.handle(clonedRequest);
  }
}

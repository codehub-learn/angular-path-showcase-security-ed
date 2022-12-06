import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticatedInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    if(request.url == "http://localhost:8080/authenticate"){
      return next.handle(request);
    }
    let clonedRequest = this.getClonedRequestWithAuthentication(request);
    return next.handle(clonedRequest);
  }

  private getClonedRequestWithAuthentication(req: HttpRequest<any>) {
    const jwt_token = localStorage.getItem("jwt_token");
    return req.clone({
      headers: req.headers.set("Authorization", "Bearer " + jwt_token)
    });
  }
}

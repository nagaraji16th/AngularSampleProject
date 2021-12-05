import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { AuthService } from "../service/authservice";
import { Observable } from "rxjs";

// injectable means to inject this is a service
@Injectable()

// this is intermediate for all https request will go from here
//authentication using web token
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser = JSON.parse(localStorage.getItem("currentUser") || '{}');
    if (currentUser && currentUser.token) {
      const authToken = this.authService.getAuthorizationToken();

      req = req.clone({
        setHeaders: { "Authentication-Token": `${authToken}` }
      });
    }
    return next.handle(req);
  }
}

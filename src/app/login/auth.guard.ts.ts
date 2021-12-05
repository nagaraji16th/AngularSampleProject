import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";
import { AuthService } from "../service/authservice";
@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    return this.checkLogin(url) || false;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string){
    if (localStorage.getItem("currentUser")) {
        
      return true;
    }

    this.authService.redirectUrl = url;

    this.router.navigate(["/login"], { queryParams: { returnUrl: url } });
  }
}

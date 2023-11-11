import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private _loginService : LoginService,
    private _router        : Router,
  ) { }

  /**
   * Activate route to logged user.
   * @todo Fix logic for user logged and user created when redirected.
   * @param route
   * @param state
   * @returns
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    if (localStorage.getItem("credential") && localStorage.getItem("user_info")) {

      return true;

    } else {

      this._router.navigate(["/auth/login"],{ queryParams: { returnUrl: state.url }});
      return false;
      
    }

  }
}

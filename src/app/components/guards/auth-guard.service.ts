import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login_page/login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _loginService : LoginService,
    private router        : Router,
  ) { }

  /**
   * Activate route to logged user.
   * @todo Fix logic for user logged and user created when redirected.
   * @param route
   * @param state
   * @returns
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return true;
    // if (localStorage.getItem('currentUser')) {
    //   let user = JSON.parse(localStorage.getItem('currentUser')!);
    //   console.log("user",user)
    //   if (this._loginService.isLoggedIn(user.username, user.password)) {
    //     return true;
    //   } else {
    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    //     return false;
    //   }
    // } else {
    //   // not logged in so redirect to login page with the return url
    //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    //   return false;
    // }

}
}

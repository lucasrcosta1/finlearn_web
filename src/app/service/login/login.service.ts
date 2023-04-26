import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Login } from 'src/app/models/login/login.model';
import { User } from 'src/app/models/user/User.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string = '';
  public appComponent = new AppComponent();

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  public setToken (token: string) {
    this.token = token;
  }
  public getToken () {
    return this.token!;
  }

  /**
   * Check whether user is logged or not.
   * @todo User type to be sent should be this.http.post<User> instead of this.http.post<any>.
   */
  isLogged (user: User): Observable<any> {
    return new Observable((observer) => {
      this.http.post<any>(environment.HTTP_REQUEST + '/auth/login', user).subscribe({
        next: (response) => {
          if (response.user) {
            this.appComponent.login = false;
            this.redirectToHome();
            localStorage.setItem("auth-key",`Bearer ${response.access_token}`);
            observer.next(response.user.id);
          }
        },
        error: (error) => {
          observer.error(error.error.detail);
        }
      });
    });
  }

  /**
   * Register a new user.
   * @todo Check if user saved to the DB is User type.
   * @todo The token saved isn't valid. Shouldn't receive an valid token in the response?
   */
  registerUser (user: User): Observable<any>  {
    return new Observable((observer) => {
      this.http.post<any>(environment.HTTP_REQUEST + '/user/create', user).subscribe({
        next: (response) => {
          console.log(response);
          if (response) {
            this.appComponent.login = false;
            this.redirectToHome();
            localStorage.setItem("auth-key",`Bearer ${response.access_token}`);
            observer.next(response);
          }
        },
        error: (error) => {
          observer.error(error.error.detail);
        }
      });
    });
  }


  /**
   * Connect to the API clicked.
   * @todo Connect with the API (Google, Fb, Microsoft, Apple) instead of returning user in env var.
   * @param api
   * @returns
   */
  public connectApiClicked (api: string): Login {
    return environment.login;
  }

  /**
   * Once login was successfully checked, user is redirect to the home page.
   */
  public redirectToHome (): void {
    this.router.navigate(['/home']);
  }

  /**
   * Once login wasn't successfull, user is redirect to the login page.
   */
  public redirectToAuth (): void {
    this.router.navigate(['/authenticate/simple-auth']);
  }

  /**
   * Log user out.
   * @todo create logic to remove token once user is logged out.
   */
  public logout (): void {
    localStorage.removeItem('auth-key');
    // window.location.reload();
  }

}

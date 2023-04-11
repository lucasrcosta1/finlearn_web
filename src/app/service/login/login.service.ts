import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Login } from 'src/app/models/login/login.model';
import { User } from 'src/app/models/user/User.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

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
      this.http.post<any>(environment.HTTP_REQUEST + '/auth/login', user, httpOptions).subscribe(
        (response) => {
          console.log(response)
          if (response.user) {
            this.appComponent.login = false;
            this.redirectToHome();
            observer.next(response.id);
          }
        }
      );
    })
  }

  /**
   * Register a new user.
   * @todo Check if user saved to the DB is User type.
   */
  registerUser (user: User) {
    this.http.post<any>(environment.HTTP_REQUEST + '/user/create', user, httpOptions).subscribe(
      (response) => {
        console.log("response register",response);
        if (response.id) {
          this.appComponent.login = false;
          this.redirectToHome();
        }
      }
    );
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
   * Log user out.
   * @todo create logic to remove token once user is logged out.
   */
  public logout (): void {
    // localStorage.removeItem('currentUser');
    // window.location.reload();
  }

}

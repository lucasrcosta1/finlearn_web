import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

import { AuthenticationService } from 'src/app/components/authentication/authentication.service';
import { PostError } from 'src/app/models/PostError.model';
import { User } from 'src/app/models/user/User.model';
import { LoginService } from 'src/app/service/login/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.css','../simple-register/simple-register.component.css']
})
export class SimpleLoginComponent {
  public loginForm?       : FormGroup;
  public hide             = true;
  @Output()
  public spinner = new EventEmitter<boolean>();

  private authService   : AuthenticationService;


  constructor (
    private router: Router,
    private formBuilder  : FormBuilder,
    private http: HttpClient,
    private loginService  : LoginService,
  ) {
    this.authService  = new AuthenticationService();
  }

  ngOnInit () {
    /**Don't think I need loginForm anymore */
    this.loginForm = this.formBuilder.group({
      username     : ['', [Validators.required, Validators.email]],
      password     : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Check whether user is logged or not.
   * @todo User type to be sent should be this.http.post<User> instead of this.http.post<any>.
   * @todo Test error catch.
   * @todo Add snackbar to success and error return.
   */
  login (): void {
    if (this.loginForm?.value.username && this.loginForm?.value.username) {
      const data = this.loginForm?.getRawValue();
      // console.log(data);
      this.spinner.emit(false);
      this.loginService.login(data).pipe (
        catchError((error, caught) => {
          let e;
          if (error instanceof Array<Object>) {
            e =  new Array<PostError>();
            error.forEach(
              err => {
                e.push(new PostError(err.loc, err.msg, err.type));
              }
            );
          } else {
            e = new PostError(error.loc,error.msg,error.type);
          }
          this._showErrorMessage(e);
          return e;
        })
      )
      .subscribe({
        next: (response: any) => {
          if (response) {
            // console.log(response);
            if (
              localStorage.getItem('id') &&
              localStorage.getItem('email') &&
              localStorage.getItem('token') &&
              localStorage.getItem('username')
            ) {
              this.loginService.logout();
            }

            localStorage.setItem('id', response.user.id);
            localStorage.setItem('email', response.user.email);
            localStorage.setItem('token', JSON.stringify(response.access_token));
            localStorage.setItem('username', response.user.name);

            this.loginService.setUser(new User(response.user));

            this.spinner.emit(true);
            this.router.navigate(['/']);
          }
        },
        error: (error) => {
          if (error) {
            console.log(error);
            console.log("Should open a modal/snack bar to tell the user that an error happend.");
          }
        }
      });
    } else {
      console.warn("WARNING: Login form is not valid.");
    }
  }

  /**
   * Pass register to be handled by the api.
   * @todo Add login verification (google - https://www.youtube.com/watch?v=1hMvJsSDnvU)
   * @param api
   */
  public outsideLogin (api: string): void {
    console.log('connect Api');
    this.loginService.connectApiClicked(api);
    // this._loginService.isLoggedIn(this.user.email, this.user.password);
  }


  /**
   * Returns error once email is not valid.
   * @returns
   */
  public getEmailMessage (): string {
    return this.authService.getEmailMessage(this.loginForm?.value.username);
  }

  /**
   * Returns error once password is not valid.
   * @returns
   */
  public getPasswordMessage (): string {
    return this.authService.getPasswordMessage(this.loginForm?.value.password);
  }

  /**
   * Create user with given information.
   * @param email
   * @param pass
   * @returns
   */
  private _createUser (email: string, pass: string): User {
    let user = new User();
    user.email = email;
    user.password = pass;
    return user;
  }

  /**
   * Treat error message received and display it in log.
   * @param error
   */
  private _showErrorMessage (error: Array<PostError> | PostError): void {
    if (error instanceof Array<PostError>) {
      error.forEach(
        err => {
          console.error('ERROR_RETURNED_FROM_POST: [', err.msg , '- error on', `${err.loc[1]}'s`, err.loc[0] , ']');
        }
      );

    } else {
      console.error('ERROR_RETURNED_FROM_POST: [', error.msg , '- error on', `${error.loc[1]}'s`, error.loc[0] , ']');
    }
  }
}

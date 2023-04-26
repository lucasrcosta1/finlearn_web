import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

import { AuthenticationService } from 'src/app/components/authentication/authentication.service';
import { User } from 'src/app/models/user/User.model';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.css','../simple-register/simple-register.component.css']
})
export class SimpleLoginComponent {
  public loginForm?       : FormGroup;
  public email            : FormControl;
  public password         : FormControl;
  public hide             = true;
  @Output()
  public spinner = new EventEmitter<boolean>();

  private loginService  : LoginService;
  private authService   : AuthenticationService;


  constructor (
    private router: Router,
    private formBuilder  : FormBuilder,
    private http: HttpClient,
  ) {
    this.loginService = new LoginService(this.router,this.http);
    this.authService  = new AuthenticationService();
    this.email        = new FormControl('', [Validators.required, Validators.email]);
    this.password     = new FormControl('', [Validators.required, Validators.minLength(6)]);

  }

  ngOnInit () {
    /**Don't think I need loginForm anymore */
    this.loginForm = this.formBuilder.group({
      email           : [this.email, [Validators.required, Validators.email]],
      password        : [this.password, [Validators.required, Validators.minLength(6)]],
      // password        : [null, [Validators.required]],
    });
  }

  /**
   * Check whether user is logged or not.
   * @todo User type to be sent should be this.http.post<User> instead of this.http.post<any>.
   */
  onSubmit (): void {
    let user = this._createUser(this.email.value, this.password.value);
    this.spinner.emit(false);
    this.loginService.isLogged(user)
    .pipe (
      catchError((error, caught) => {
        console.log('An error occurred:', error);
        // this.spinner.emit(true);
        return of(null);
      })
    )
    .subscribe({
      next: (data) => {
          if(data) {
            console.log(data);
            console.log("Should open a modal/snack bar to tell the user that operation was successful.");
            this.spinner.emit(true);

          }
      },
      error: (error) => {
        if (error) {
          console.log(error);
          console.log("Should open a modal/snack bar to tell the user that an error happend.");
          this.spinner.emit(true);
        }
      }
    });
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
    return this.authService.getEmailMessage(this.loginForm?.value.email);
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

}

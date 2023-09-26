import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/components/authentication/authentication.service';
import { PostError } from 'src/app/models/PostError.model';
import { User } from 'src/app/models/user/User.model';
import { ApiService } from 'src/app/service/api/api.service';
import { LoginService } from 'src/app/service/login/login.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

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
    private _router: Router,
    private _formBuilder  : FormBuilder,
    private _loginService  : LoginService,
    private _snackBarService: SnackbarService,
    private _api: ApiService,
  ) {
    this.authService  = new AuthenticationService();
  }

  ngOnInit () {
    /**Don't think I need loginForm anymore */
    this.loginForm = this._formBuilder.group({
      username     : ['', [Validators.required, Validators.email]],
      password     : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Check whether user is logged or not.
   * @todo Test error catch.
   */
  async login (): Promise<void> {
    if (this.loginForm?.value.username && this.loginForm?.value.username) {
      const route   = '/auth/login';
      const data    = this.loginForm?.getRawValue();
      const body    = `username=${encodeURIComponent(data.username)}&password=${encodeURIComponent(data.password)}`;
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

      localStorage.setItem('email', data.email);
      localStorage.setItem('username', data.email);

      // let response = await this._api.post(route, body, null, headers);
      // if (response.getSuccess()) {
      //   this.spinner.emit(false);
      //   localStorage.setItem('id', response.getResponse()?.user.id);
      //   localStorage.setItem('email', response.getResponse()?.user.email);
      //   localStorage.setItem('token', response.getResponse()?.access_token);
      //   localStorage.setItem('username', response.getResponse()?.user.name);
      //   this._loginService.setUser(new User(response.getResponse().user));

      //   this.spinner.emit(true);
      //   this._snackBarService.openSnackBar(2, `Bem vindo ${response.getResponse()?.user.name}!`);
      // } else {
      //   this._snackBarService.openSnackBar(3,response.getResponse().message);
      // }

      this._router.navigate(['/']);
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
    this._loginService.connectApiClicked(api);
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

  getEnter (): void {
    var input = document.getElementById("myPass");
    if(input) {
        input.addEventListener("keypress", (event) => {
          console.log(event.key)
          if (event.key == "Enter") {
              event.preventDefault();
              document.getElementById("login-btn")!.click();
          }
        });
    }
  }



}

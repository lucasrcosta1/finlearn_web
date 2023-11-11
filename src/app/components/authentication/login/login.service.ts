import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared/shared.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _router: Router,
    private _snackbarService: SnackbarService,
    private _sharedService: SharedService,
  ) { }

  /**
   * Handle login process based on the credentials passed as parameter.
   * @param username 
   * @param password 
   */
  login (username: string, password: string): void {

    const route   = '/auth/login';
    const body    = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    localStorage.setItem('email', username);
    localStorage.setItem('username', username);

    // let response = await this._api.post(route, body, null, headers);
    // if (response.getSuccess()) {
    //   this.spinner.emit(false);
    //   localStorage.setItem('id', response.getResponse()?.user.id);
    //   localStorage.setItem('email', response.getResponse()?.user.email);
    //   localStorage.setItem('token', response.getResponse()?.access_token);
    //   localStorage.setItem('username', response.getResponse()?.user.name);
    //   this._loginService.setUser(new User(response.getResponse().user));

    //   this.spinner.emit(true);
    //   this._snackbarService.openSnackBar(2, `Bem vindo ${response.getResponse()?.user.name}!`);
    // } else {
    //   this._snackbarService.openSnackBar(3,response.getResponse().message);
    // }
    this._snackbarService.openSnackBar(2, `Seja bem vindo, ${username}!`);
    this._router.navigate(['/']);

  }

  /**
   * Create login form.
   * @param formBuilder 
   * @returns 
   */
  createLoginForm (formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({

      username: [null, Validators.email],
      password: [null, Validators.minLength(6)],

    });

  }

  /**
   * Check whether login fields are correctly filled. 
   * @param username 
   * @param password 
   * @returns 
   */
  checkLoginFieldsAreCorrectlyFilled (usernameFieldId: string, passwordFieldId: string, formValueForUsername: string, formValueForPassword: string): boolean{

    let isUsernameFieldOk = false, isPasswordFieldOk = false;
    if (this._sharedService.usernameMatchPattern(formValueForUsername)){
      
      this._sharedService.removeFieldError(usernameFieldId);
      this._sharedService.hideErrorMessage(usernameFieldId+"-error");
      isUsernameFieldOk = true;

    } else {

      this._sharedService.markFieldError(usernameFieldId);
      this._sharedService.showErrorMessage(usernameFieldId+"-error");

    }
    if (this._sharedService.passwordMatchPattern(formValueForPassword)) {

      this._sharedService.removeFieldError(passwordFieldId);
      this._sharedService.hideErrorMessage(passwordFieldId+"-error");
      isPasswordFieldOk = true;

    } else {

      this._sharedService.markFieldError(passwordFieldId);
      this._sharedService.showErrorMessage(passwordFieldId+"-error");

    }
    return isUsernameFieldOk && isPasswordFieldOk;

  }


  
}

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _router: Router,
    private _snackBarService: SnackbarService,
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
    //   this._snackBarService.openSnackBar(2, `Bem vindo ${response.getResponse()?.user.name}!`);
    // } else {
    //   this._snackBarService.openSnackBar(3,response.getResponse().message);
    // }
    this._snackBarService.openSnackBar(2, `Seja bem vindo, ${username}!`);
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
    if (this.usernameMatchPattern(formValueForUsername)){
      
      this.removeFieldError(usernameFieldId);
      this.hideErrorMessage(usernameFieldId+"-error");
      isUsernameFieldOk = true;

    } else {

      this.markFieldError(usernameFieldId);
      this.showErrorMessage(usernameFieldId+"-error");

    }
    if (this.passwordMatchPattern(formValueForPassword)) {

      this.removeFieldError(passwordFieldId);
      this.hideErrorMessage(passwordFieldId+"-error");
      isPasswordFieldOk = true;

    } else {

      this.markFieldError(passwordFieldId);
      this.showErrorMessage(passwordFieldId+"-error");

    }
    return isUsernameFieldOk && isPasswordFieldOk;

  }


  /**
   * Username match login pattern.
   * @param username 
   * @returns 
   */
  usernameMatchPattern (username: string | null): boolean {

    if (username && username != "" && this.usernameIsAnEmail(username)) return true;
    return false;

  }

  /**
   * Password match login pattern.
   * @param password 
   * @returns 
   */
  passwordMatchPattern (password: string | null): boolean {

    return (password && password.length >= 6) ? true : false ;

  }

  /**
   * Check whether an username is an email or not.
   * @param username 
   * @returns 
   */
  usernameIsAnEmail (username: string): boolean {

    return username.includes("@") && (username.includes(".com") || username.includes(".org"));

  }

  /**
   * Set field in error by given id.
   * @param fieldName
   */
  markFieldError (fieldName: string): void {

    const fieldDiv = document.getElementById(fieldName);
    if (fieldDiv) {

      fieldDiv.style.border = "1px solid red";

    }

  }

  /**
   * Set field out from error by a given id.
   * @param fieldName
   */
  removeFieldError (fieldName: string): void {

    const fieldDiv = document.getElementById(fieldName);
    if (fieldDiv) {

      fieldDiv.style.border = "1px solid black";

    }

  }

  /**
   * Show error message.
   * @param spanIdName 
   */
  showErrorMessage (spanIdName: string): void {

    const span = document.getElementById(spanIdName);
    if (span) {

      span.style.display = "block";

    }

  }

  /**
   * Hide error message.
   * @param spanIdName 
   */
  hideErrorMessage (spanIdName: string): void {

    const span = document.getElementById(spanIdName);
    if (span) {

      span.style.display = "none";

    }

  }

  
}

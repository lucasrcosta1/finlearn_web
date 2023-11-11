import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api/api.service';
import { SharedService } from 'src/app/service/shared/shared.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  name: string | null = null;
  email: string | null = null;
  private user = new BehaviorSubject<{name: string, email: string} | null>(null);


  constructor(
    private _router: Router,
    private _snackbarService: SnackbarService,
    private _sharedService: SharedService,
    private _apiService: ApiService,
  ) { }

  /**
   * Handle login process based on the credentials passed as parameter.
   * @param username 
   * @param password 
   */
  login (username: string, password: string): void {

    if (username && password) {
      this._apiService.login(username, password).subscribe({
        next: (next) => {
          
          const userInfo = {name: next.user.name, email: next.user.email};
          this.name = userInfo.name; 
          this.email = userInfo.email;
          this.setUser(userInfo)
          localStorage.setItem("credential", next.access_token);
          localStorage.setItem("user_info", JSON.stringify(userInfo));
          this._router.navigate(["/home"]);

        },
        error: (error) => {
          const errorDetail = this.handleError(error);
          this._snackbarService.openSnackBar(3, errorDetail);
        }
      });
    } 

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

  /**
   * Handle error response.
   * @param error 
   * @returns 
   */
  handleError (error: HttpErrorResponse): string {

    return error.error.detail;

  }

  /**
   * Log user out.
   * @todo create logic to remove token once user is logged out.
   */
  logout (): void {

    this.name = null; 
    this.email = null;
    localStorage.removeItem('user_info');
    localStorage.removeItem('credential');
  }

  getUserInfo (): {name: string, email: string} | null {

    if (this.name && this.email) {

      return {name: this.name, email: this.email};

    } else {

      const userStr = localStorage.getItem('user_info');
      if (userStr) {

        const userInfo = JSON.parse(userStr);
        return {name: userInfo.name, email: userInfo.email};

      } return null;

    }

  }

  public setUser (userInfo: {name: string, email: string}) {
    this.user.next(userInfo);
  }
  public getUser (): Observable<{name: string, email: string} | null> {
    return this.user.asObservable();
  }
  
}

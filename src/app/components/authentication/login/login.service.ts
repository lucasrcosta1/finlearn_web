import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user/User.model';
import { ApiService } from 'src/app/service/api/api.service';
import { SharedService } from 'src/app/service/shared/shared.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string = '';
  private user = new BehaviorSubject<User>(new User());
  public userInfo: {name: string, email: string} | null = null;

  public appComponent = new AppComponent();

  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _snackbarService: SnackbarService,
    private _sharedService: SharedService,
    private _apiService: ApiService,
  ) { }

  /**
   * Once login was successfully checked, user is redirect to the home page.
   */
  public redirectToHome (): void {
    this._router.navigate(['/home']);
  }

  /**
   * Once login wasn't successfull, user is redirect to the login page.
   */
  public redirectToAuth (): void {
    this._router.navigate(['/auth/login']);
  }

  /**
   * Log user out.
   * @todo create logic to remove token once user is logged out.
   */
  public logout (): void {
    localStorage.removeItem('credential');
    localStorage.removeItem('user_info');
  }

  /**
   * Login user.
   * @param data
   * @returns
   */
  login (username: string, password: string): void {

    if (username && password) {
      this._apiService.login(username, password).subscribe({
        next: (next) => {

          const userInfo = {name: next.user.name, email: next.user.email};
          this.setUser(next.user)
          this.userInfo = userInfo;
          localStorage.setItem("credential", next.access_token);
          localStorage.setItem("user_info", JSON.stringify(userInfo));
          window.location.replace("/home")

        },
        error: (error) => {
          const errorDetail = this.handleError(error);
          this._snackbarService.openSnackBar(3, errorDetail);
        }
      });
    } 
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

  public setUser (user: User) {
    this.user.next(user);
  }
  public getUser (): Observable<User> {
    return this.user.asObservable();
  }
}

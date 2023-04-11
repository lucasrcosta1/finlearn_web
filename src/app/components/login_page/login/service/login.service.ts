import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { catchError, Observable } from 'rxjs';

import { AppComponent } from 'src/app/app.component';
import { Login } from 'src/app/models/login/login.model';
import { User } from 'src/app/models/user/User.model';
import { environment } from 'src/environments/environment';
import { OutsideLoginComponent } from '../../outside-login/outside-login.component';


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
  private _backEndUrl: string = "/v1/user/create"; //add to env var

  // "https://finlearn-api-production.up.railway.app/v1/auth/login" //usuario cadastrado

  constructor(
    private _router: Router,
    private http: HttpClient,
    public dialog?: MatDialog,
  ) { }

  /**
   * Check whether login is successfull or failed.
   * @param username
   * @param password
   * @returns
   */
  public isLoggedIn (username: string, password: string): boolean {
    // return this._checkUsernameIsValid(username) && this._checkPasswordIsValid(password);
    if (this._checkUsernameIsValid(username) && this._checkPasswordIsValid(password)) {
      let user = {
        username: username,
        password: password
      }
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    } else return false;
  }

  /**
   * Once login was successfully checked, user is redirect to the home page.
   */
  public redirectToHome (): void {
    this._router.navigate(['/home'])
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
   * Log user out.
   */
  public logout (): void {
    localStorage.removeItem('currentUser');
    // window.location.reload();
  }

  /**
   * Open modal to give user a choice of which api to login with.
   */
  public loginWith (): void {
    const dialogConfig              = new MatDialogConfig();
    dialogConfig.disableClose       = false;
    dialogConfig.autoFocus          = true;
    dialogConfig.width              = "30%";
    dialogConfig.enterAnimationDuration = '500ms';
    dialogConfig.height             = "auto";
    dialogConfig.panelClass         = 'management-styles';

    let dialogRef = this.dialog!.open(OutsideLoginComponent, dialogConfig);
  }

  /**
   * Get all users.
   * @todo Add .pipe() method to handle error with catchError().
   * @returns
   */
  public getUsers (): Observable<User[]> {
    return this.http.get<User[]>(environment.HTTP_REQUEST + '/v1/auth/me');
  }

  public postUser(user: User) {
    return this.http.post<User>(environment.HTTP_REQUEST + '/user/create', user);
  }

  /**
   * Send username to the backend to check its validity.
   * @param username
   * @returns
   */
  private _checkUsernameIsValid (username: string): boolean {
    return (username == environment.login.email || username == JSON.parse(localStorage.getItem('registeredUser')!).email);
  }

  /**
   * Send password to the backend to check its validity.
   * @todo Should check password's hash, not the value of it in plain text.
   * @param password
   * @returns
   */
  private _checkPasswordIsValid (password: string): boolean {
    return (password == environment.login.password|| password == JSON.parse(localStorage.getItem('registeredUser')!).password);
  }




}

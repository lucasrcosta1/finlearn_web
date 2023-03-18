import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _router: Router,
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

  public logout (): void {
    localStorage.removeItem('currentUser');
    // window.location.reload();
  }

  /**
   * Send username to the backend to check its validity.
   * @param username
   * @returns
   */
  private _checkUsernameIsValid (username: string): boolean {
    return (username == 'adm@adm.com.br');
  }

  /**
   * Send password to the backend to check its validity.
   * @param password
   * @returns
   */
  private _checkPasswordIsValid (password: string): boolean {
    return (password == 'Admin123@');
  }



}

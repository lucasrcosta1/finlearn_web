import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  logoImagePath =  "../../../../../assets/images/finlearnLogo.png";
  tabTitle = "Login";

  constructor () {}

  /**
   * Handle a registration request.
   * @param isRegistrationRequest 
   */
  handleRegistrationRequest (isRegistrationRequest: boolean): void {

    if (isRegistrationRequest) {

      this._changeViewTo("register");

    }

  }

  /**
   * Handle a registration request.
   * @param isLoginRequest 
   */
  handleLoginRequest (isLoginRequest: boolean): void {

    if (isLoginRequest) {

      this._changeViewTo("login");

    }

  }

  /**
   * Change user view depending on the clicked route.
   * @param route 
   */
  private _changeViewTo (route: string): void {
    
    if (route == "login") {

        this._enableLogin();
        this._disableRegister();
        this.tabTitle = "Login";
        
    } else if (route == "register") {
        
        this._disableLogin();
        this._enableRegister();
        this.tabTitle = "Cadastro";

    }

  }

  /**
   * Enable login div's view.
   */
  private _enableLogin (): void {

    const loginDiv = document.getElementById(`login-section`);
    if (loginDiv) loginDiv.style.display = "block";

  }

  /**
   * Disable login div's view.
   */
  private _disableLogin (): void {

    const loginDiv = document.getElementById(`login-section`);
    if (loginDiv) loginDiv.style.display = "none";

  }

  /**
   * Enable register div's view.
   */
  private _enableRegister (): void {

    const registerDiv = document.getElementById(`register-section`);
    if (registerDiv) registerDiv.style.display = "block";

  }

  /**
   * Disable register div's view.
   */
  private _disableRegister (): void {

    const registerDiv = document.getElementById(`register-section`);
    if (registerDiv) registerDiv.style.display = "none";

  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-bigger-screen',
  templateUrl: './login-bigger-screen.component.html',
  styleUrls: ['./login-bigger-screen.component.css', "../../../../../styles.css"]
})
export class LoginBiggerScreenComponent {

  @Output() 
  triggerRegistry = new EventEmitter<boolean>();
  @Input()
  imagePath: string | null = null;
  @Input()
  tabTitle: string | null = null;

  loginForm: FormGroup;

  constructor (
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
  ) {

    this.loginForm = this._createLoginForm(this._formBuilder);

  }


  /**
   * Emit event and enable register page.
   */
  enableRegisterPage (): void {

    this.triggerRegistry.emit(true);

  }

  /**
   * Submit form data.
   */
  submit (): void {

    if (this._checkFieldsCorrectlyFilled()) {
      
      const username = this.loginForm.value.username, password = this.loginForm.value.password;
      this._loginService.login(username, password);

    }

  }

  /**
   * Create login form.
   * @param formBuilder 
   * @returns 
   */
  private _createLoginForm (formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({

      username: [null, Validators.email],
      password: [null, Validators.minLength(6)],

    });

  }

  private _checkFieldsCorrectlyFilled (): boolean{

    let isUsernameFieldOk = false, isPasswordFieldOk = false;
    if (this._loginService.usernameMatchPattern(this.loginForm.value.username)){
      
      this._loginService.removeFieldError("loginBiggerScreenUsername");
      this._loginService.hideErrorMessage("loginBiggerScreenUsername"+"-error");
      isUsernameFieldOk = true;

    } else {

      this._loginService.markFieldError("loginBiggerScreenUsername");
      this._loginService.showErrorMessage("loginBiggerScreenUsername"+"-error");

    }
    if (this._loginService.passwordMatchPattern(this.loginForm.value.password)) {

      this._loginService.removeFieldError("loginBiggerScreenPasswordDiv");
      this._loginService.hideErrorMessage("loginBiggerScreenPasswordDiv"+"-error");
      isPasswordFieldOk = true;

    } else {

      this._loginService.markFieldError("loginBiggerScreenPasswordDiv");
      this._loginService.showErrorMessage("loginBiggerScreenPasswordDiv"+"-error");

    }
    return isUsernameFieldOk && isPasswordFieldOk;

  }

}

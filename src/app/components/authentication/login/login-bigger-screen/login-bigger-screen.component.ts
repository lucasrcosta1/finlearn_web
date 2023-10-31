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

    this.loginForm = this._loginService.createLoginForm(this._formBuilder);

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

    const username = this.loginForm.value.username, password = this.loginForm.value.password;
    if (this._loginService.checkLoginFieldsAreCorrectlyFilled("loginBiggerScreenUsername", "loginBiggerScreenPasswordDiv", username, password)) {
      
      this._loginService.login(username, password);

    }

  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-bigger-screen',
  templateUrl: './register-bigger-screen.component.html',
  styleUrls: ['./register-bigger-screen.component.css', "../../../../../styles.css"]
})
export class RegisterBiggerScreenComponent {

  @Output() 
  triggerLogin = new EventEmitter<boolean>();
  @Input()
  imagePath: string | null = null;
  @Input()
  tabTitle: string | null = null;

  registerForm: FormGroup;

  constructor (
    private _formBuilder: FormBuilder,
    private _registerService: RegisterService,
  ) {

    this.registerForm = this._registerService.createRegisterForm(this._formBuilder);

  }

  /**
   * Emit event and enable login page.
   */
  enableLoginPage (): void {

    this.triggerLogin.emit(true);

  }

  /**
   * Submit register form data.
   */
  submit (): void {
    
    const registerUser = this._registerService.createRegisterUser(this.registerForm);
    if (registerUser && this._registerService.checkRegisterFieldsAreCorrectlyFilled("registerBiggerScreenFullname", "registerBiggerScreenPhone", "registerBiggerScreenUsername", "registerBiggerScreenUsernameCheck", "registerBiggerScreenPasswordDiv", "registerBiggerScreenPasswordCheckDiv", registerUser.fullname, registerUser.phone, registerUser.username, registerUser.password, registerUser.usernameCheck, registerUser.passwordCheck)) {
      
      this._registerService.registerUser(registerUser);

    }

  }

  /**
   * Apply mask to the phone number.
   * @param inputElement
   */
  applyPhoneMask (inputElement: HTMLInputElement): void {
    
    inputElement.value = this._registerService.applyPhoneMask(inputElement);

  }
  
}

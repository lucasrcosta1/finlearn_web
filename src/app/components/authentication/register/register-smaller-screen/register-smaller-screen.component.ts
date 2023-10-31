import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-smaller-screen',
  templateUrl: './register-smaller-screen.component.html',
  styleUrls: ['./register-smaller-screen.component.css', "../../../../../styles.css"]
})
export class RegisterSmallerScreenComponent {

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

    const fullname      = this.registerForm.value.fullname, 
          phone         = this.registerForm.value.phone, 
          username      = this.registerForm.value.username, 
          password      = this.registerForm.value.password,
          usernameCheck = this.registerForm.value.usernameCheck, 
          passwordCheck = this.registerForm.value.passwordCheck;
    if (this._registerService.checkRegisterFieldsAreCorrectlyFilled("registerSmallerScreenFullname", "registerSmallerScreenPhone", "registerSmallerScreenUsername", "registerSmallerScreenUsernameCheck", "registerSmallerScreenPasswordDiv", "registerSmallerScreenPasswordCheckDiv", fullname, phone, username, password, usernameCheck, passwordCheck)) {
      
      // this._sharedService.login(username, password);
      console.log("\n\nRedirect to login page and show a snackbar that say user should look at its email.\n\n");

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

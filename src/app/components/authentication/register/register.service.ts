import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _loginService: LoginService
  ) { }


  /**
   * Create register form.
   * @param formBuilder 
   * @returns 
   */
  createRegisterForm (formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({

      fullname: [null, Validators.minLength(3)],
      phone: [null, Validators.pattern("(XX) XXXXX-XXXX")],
      username: [null, Validators.email],
      usernameCheck: [null, Validators.email],
      password: [null, Validators.minLength(6)],
      passwordCheck: [null, Validators.minLength(6)],

    });

  }

  /**
   * Check whether register fields are correctly filled. 
   * @param username 
   * @param password 
   * @returns 
   */
  checkRegisterFieldsAreCorrectlyFilled (fullnameFieldId: string, phoneFieldId: string, usernameFieldId: string, usernameCheckFieldId: string, passwordFieldId: string, passwordCheckFieldId: string, formValueForFullname: string | null, formValueForPhone: string | null, formValueForUsername: string | null, formValueForPassword: string | null, formValueForUsernameCheck: string | null, formValueForPasswordCheck: string | null): boolean{

    let isFullnameOk = false, isPhoneOk = false, isUsernameFieldOk = false, isPasswordFieldOk = false;
    if (this._loginService.usernameMatchPattern(formValueForUsername) && this._loginService.usernameMatchPattern(formValueForUsernameCheck)){
      
      if (formValueForUsername !== formValueForUsernameCheck) {

        this._loginService.markFieldError(usernameFieldId);
        this._loginService.showErrorMessage("registerSmallerScreenDoNotMatchUsername-error");
        this._loginService.markFieldError(usernameCheckFieldId);
        this._loginService.showErrorMessage("registerSmallerScreenDoNotMatchUsernameCheck-error");

      } else {
      
        isUsernameFieldOk = true;
        this._loginService.removeFieldError(usernameFieldId);
        this._loginService.hideErrorMessage("registerSmallerScreenDoNotMatchUsername-error");
        this._loginService.removeFieldError(usernameCheckFieldId);
        this._loginService.hideErrorMessage("registerSmallerScreenDoNotMatchUsernameCheck-error");
      
      }
      this._loginService.hideErrorMessage("registerSmallerScreenNonValidUsername-error");
      this._loginService.hideErrorMessage("registerSmallerScreenNonValidUsernameCheck-error");

    } else {

      this._loginService.markFieldError(usernameFieldId);
      this._loginService.markFieldError(usernameCheckFieldId);
      this._loginService.showErrorMessage("registerSmallerScreenNonValidUsername-error");
      this._loginService.showErrorMessage("registerSmallerScreenNonValidUsernameCheck-error");

    }

    if (this._loginService.passwordMatchPattern(formValueForPassword) && this._loginService.passwordMatchPattern(formValueForPasswordCheck)){
      
      if (formValueForPassword !== formValueForPasswordCheck) {

        this._loginService.markFieldError(passwordFieldId);
        this._loginService.showErrorMessage("registerSmallerScreenDoNotMatchPassword-error");
        this._loginService.markFieldError(passwordCheckFieldId);
        this._loginService.showErrorMessage("registerSmallerScreenDoNotMatchPasswordCheck-error");

      } else {
      
        isPasswordFieldOk = true;
        this._loginService.removeFieldError(passwordFieldId);
        this._loginService.hideErrorMessage("registerSmallerScreenDoNotMatchPassword-error");
        this._loginService.removeFieldError(passwordCheckFieldId);
        this._loginService.hideErrorMessage("registerSmallerScreenDoNotMatchPasswordCheck-error");
      
      }
      this._loginService.hideErrorMessage("registerSmallerScreenNonValidPassword-error");
      this._loginService.hideErrorMessage("registerSmallerScreenNonValidPasswordCheck-error");

    } else {

      this._loginService.markFieldError(passwordFieldId);
      this._loginService.markFieldError(passwordCheckFieldId);
      this._loginService.showErrorMessage("registerSmallerScreenNonValidPassword-error");
      this._loginService.showErrorMessage("registerSmallerScreenNonValidPasswordCheck-error");

    }

    if (formValueForFullname && formValueForFullname.length > 2) {

      this._loginService.removeFieldError(fullnameFieldId);
      this._loginService.hideErrorMessage(fullnameFieldId+"-error");
      isFullnameOk = true;

    } else {

      this._loginService.markFieldError(fullnameFieldId);
      this._loginService.showErrorMessage(fullnameFieldId+"-error");

    }

    if (formValueForPhone && formValueForPhone.length == 14) {

      this._loginService.removeFieldError(phoneFieldId);
      this._loginService.hideErrorMessage(phoneFieldId+"-error");
      isPhoneOk = true;

    } else {

      this._loginService.markFieldError(phoneFieldId);
      this._loginService.showErrorMessage(phoneFieldId+"-error");

    }

    return isFullnameOk && isPhoneOk && isUsernameFieldOk && isPasswordFieldOk;

  }

  /**
   * Apply mask to the phone number.
   * @param inputElement
   */
  applyPhoneMask (inputElement: HTMLInputElement): string {
    let telephone = inputElement.value;
    telephone = telephone.replace(/\D/g, '');

    if (telephone.length <= 10) {
      telephone = telephone.replace(/^(\d{2})(\d)/g, '($1) $2');
    } else {
      telephone = telephone.replace(/^(\d{2})(\d{1})(\d{4})(\d)/g, '($1) $2 $3-$4');
    }
    return telephone;

  }
}

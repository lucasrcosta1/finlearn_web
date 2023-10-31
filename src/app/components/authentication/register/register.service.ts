import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { SharedService } from 'src/app/service/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _sharedService: SharedService,
  ) { }


  /**
   * Create register form.
   * @param formBuilder 
   * @returns 
   */
  createRegisterForm (formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({

      fullname: [null, [Validators.required, Validators.minLength(3)]],
      phone: [null, [Validators.required, Validators.pattern("(XX) XXXXX-XXXX")]],
      username: [null, [Validators.required, Validators.email]],
      usernameCheck: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordCheck: [null, [Validators.required, Validators.minLength(6)]],

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
    if (this._sharedService.usernameMatchPattern(formValueForUsername) && this._sharedService.usernameMatchPattern(formValueForUsernameCheck)){
      
      if (formValueForUsername !== formValueForUsernameCheck) {

        this._sharedService.markFieldError(usernameFieldId);
        this._sharedService.showErrorMessage("registerSmallerScreenDoNotMatchUsername-error");
        this._sharedService.showErrorMessage("registerBiggerScreenDoNotMatchUsername-error");
        this._sharedService.markFieldError(usernameCheckFieldId);
        this._sharedService.showErrorMessage("registerSmallerScreenDoNotMatchUsernameCheck-error");
        this._sharedService.showErrorMessage("registerBiggerScreenDoNotMatchUsernameCheck-error");

      } else {
      
        isUsernameFieldOk = true;
        this._sharedService.removeFieldError(usernameFieldId);
        this._sharedService.hideErrorMessage("registerSmallerScreenDoNotMatchUsername-error");
        this._sharedService.hideErrorMessage("registerBiggerScreenDoNotMatchUsername-error");
        this._sharedService.removeFieldError(usernameCheckFieldId);
        this._sharedService.hideErrorMessage("registerSmallerScreenDoNotMatchUsernameCheck-error");
        this._sharedService.hideErrorMessage("registerBiggerScreenDoNotMatchUsernameCheck-error");
      
      }
      this._sharedService.hideErrorMessage("registerSmallerScreenNonValidUsername-error");
      this._sharedService.hideErrorMessage("registerSmallerScreenNonValidUsernameCheck-error");
      this._sharedService.hideErrorMessage("registerBiggerScreenNonValidUsername-error");
      this._sharedService.hideErrorMessage("registerBiggerScreenNonValidUsernameCheck-error");

    } else {

      this._sharedService.markFieldError(usernameFieldId);
      this._sharedService.markFieldError(usernameCheckFieldId);
      this._sharedService.showErrorMessage("registerSmallerScreenNonValidUsername-error");
      this._sharedService.showErrorMessage("registerSmallerScreenNonValidUsernameCheck-error");
      this._sharedService.showErrorMessage("registerBiggerScreenNonValidUsername-error");
      this._sharedService.showErrorMessage("registerBiggerScreenNonValidUsernameCheck-error");

    }

    if (this._sharedService.passwordMatchPattern(formValueForPassword) && this._sharedService.passwordMatchPattern(formValueForPasswordCheck)){
      
      if (formValueForPassword !== formValueForPasswordCheck) {

        this._sharedService.markFieldError(passwordFieldId);
        this._sharedService.showErrorMessage("registerSmallerScreenDoNotMatchPassword-error");
        this._sharedService.showErrorMessage("registerBiggerScreenDoNotMatchPassword-error");
        this._sharedService.markFieldError(passwordCheckFieldId);
        this._sharedService.showErrorMessage("registerSmallerScreenDoNotMatchPasswordCheck-error");
        this._sharedService.showErrorMessage("registerBiggerScreenDoNotMatchPasswordCheck-error");

      } else {
      
        isPasswordFieldOk = true;
        this._sharedService.removeFieldError(passwordFieldId);
        this._sharedService.hideErrorMessage("registerSmallerScreenDoNotMatchPassword-error");
        this._sharedService.hideErrorMessage("registerBiggerScreenDoNotMatchPassword-error");
        this._sharedService.removeFieldError(passwordCheckFieldId);
        this._sharedService.hideErrorMessage("registerSmallerScreenDoNotMatchPasswordCheck-error");
        this._sharedService.hideErrorMessage("registerBiggerScreenDoNotMatchPasswordCheck-error");
      
      }
      this._sharedService.hideErrorMessage("registerSmallerScreenNonValidPassword-error");
      this._sharedService.hideErrorMessage("registerSmallerScreenNonValidPasswordCheck-error");
      this._sharedService.hideErrorMessage("registerBiggerScreenNonValidPassword-error");
      this._sharedService.hideErrorMessage("registerBiggerScreenNonValidPasswordCheck-error");

    } else {

      this._sharedService.markFieldError(passwordFieldId);
      this._sharedService.markFieldError(passwordCheckFieldId);
      this._sharedService.showErrorMessage("registerSmallerScreenNonValidPassword-error");
      this._sharedService.showErrorMessage("registerSmallerScreenNonValidPasswordCheck-error");
      this._sharedService.showErrorMessage("registerBiggerScreenNonValidPassword-error");
      this._sharedService.showErrorMessage("registerBiggerScreenNonValidPasswordCheck-error");

    }

    if (formValueForFullname && formValueForFullname.length > 2) {

      this._sharedService.removeFieldError(fullnameFieldId);
      this._sharedService.hideErrorMessage(fullnameFieldId+"-error");
      isFullnameOk = true;

    } else {

      this._sharedService.markFieldError(fullnameFieldId);
      this._sharedService.showErrorMessage(fullnameFieldId+"-error");

    }

    if (formValueForPhone && this._sharedService.isPhoneValid(formValueForPhone)) {

      this._sharedService.removeFieldError(phoneFieldId);
      this._sharedService.hideErrorMessage(phoneFieldId+"-error");
      isPhoneOk = true;

    } else {

      this._sharedService.markFieldError(phoneFieldId);
      this._sharedService.showErrorMessage(phoneFieldId+"-error");

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

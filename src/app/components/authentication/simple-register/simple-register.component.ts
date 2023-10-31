import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/User.model';
import { LoginService } from 'src/app/service/login/login.service';
import { AuthenticationService } from '../authentication.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-simple-register',
  templateUrl: './simple-register.component.html',
  styleUrls: ['./simple-register.component.css']
})
export class SimpleRegisterComponent {
  public registerForm     : FormGroup;
  public user_type?       : string;
  public email            : FormControl;
  public confirmEmail     : FormControl;
  public password         : FormControl;
  public confirmPassword  : FormControl;
  public hide             = true;
  public hideConfirmation = true;
  @Output()
  public spinner = new EventEmitter<boolean>();

  constructor (
    private _router        : Router,
    private _formBuilder   : FormBuilder,
    private _loginService  : LoginService,
    private _snackBarService: SnackbarService,
    private _api: ApiService,
  ) {
    this.email            = new FormControl('', [Validators.required, Validators.email]);
    this.confirmEmail     = new FormControl('', [Validators.required, Validators.email]);
    this.password         = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.confirmPassword  = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.registerForm     = this._formBuilder.group({
      name            : [null, [Validators.required]],
      telephone       : [null, [Validators.required]],
      email           : [null, [Validators.required, Validators.email]],
      confirmEmail    : [null, [Validators.required, Validators.email]],
      password        : [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword : [null, [Validators.required, Validators.minLength(6)]],
      // birthDate    : [null, [Validators.required]],
      // role            : [null, Validators.required],
    });
  }


  /**
   * Check whether the inputs are the same
   * @param group
   * @returns
   */
  public checkInputEquality(group: FormGroup) {
    const input1Value = group.get('email')?.value;
    const input2Value = group.get('confirmEmail')?.value;
    // console.log(input1Value);
    // console.log(input2Value);

    return input1Value === input2Value ? null : { mismatch: true };
  }

  /**
   * Submit user registry.
   * @todo DB is not saving data as User type.
   * @todo verify whether password and confirmPassword fields are the same. Same to email.
   * @todo validators should give user an error message in the screen
   */
  public async onSubmit (): Promise<void>{
    // console.log( this.registerForm.value.role)
    let route = '/user/create';
    let requestBody: User = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      role: "NORMAL_USER",
      telephone: this.registerForm.value.telephone
    };
    // console.log(user);

    let firstR = await this._api.post(route, requestBody, null);
    // console.log(firstR);
    if (firstR.getSuccess()) {
      this.spinner.emit(false);
      route = '/auth/login';
      const body = `username=${encodeURIComponent(requestBody.email)}&password=${encodeURIComponent(requestBody.password)}`;
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

      let secondR = await this._api.post(route, body, null, headers);
      // console.log(secondR);
      if (secondR.getSuccess()) {
        // console.log(secondR);

        localStorage.setItem('id', secondR.getResponse()?.user.id);
        localStorage.setItem('email', secondR.getResponse()?.user.email);
        localStorage.setItem('token', secondR.getResponse()?.access_token);
        localStorage.setItem('username', secondR.getResponse()?.user.name);

        this._loginService.setUser(new User(secondR.getResponse().user));

        // this.spinner.emit(true);
        // this._router.navigate(['/']);

        this._snackBarService.openSnackBar(2, `Bem vindo ${secondR.getResponse()?.user.name}!`);
      } else {
        this._snackBarService.openSnackBar(3,'Internal Error');
      }
    } else {
      this._snackBarService.openSnackBar(3, firstR.getResponse().message);
    }

    this.spinner.emit(true);
    this._router.navigate(['/']);


  }

  /**
   * Apply mask to the phone number.
   * @param inputElement
   */
  public celMask (inputElement: HTMLInputElement): void {
    let telephone = inputElement.value;
    telephone = telephone.replace(/\D/g, '');

    if (telephone.length <= 10) {
      telephone = telephone.replace(/^(\d{2})(\d)/g, '($1) $2');
    } else {
      telephone = telephone.replace(/^(\d{2})(\d{1})(\d{4})(\d)/g, '($1) $2 $3-$4');
    }

    inputElement.value = telephone;
  }

  /**
   * Check whether email are equal or not.
   *
   * @todo Create return confirmation.
   *
   * @param email
   * @param confirmationEmail
   */
  public checkEmail (email: HTMLInputElement, confirmationEmail: HTMLInputElement): void {
    let emailV = email.value;
    let confirmationEmailV = confirmationEmail.value;
    if (emailV == confirmationEmailV) {
      console.log("Does not return error - Both are equal.");
    } else {
      console.log("Return mat-error.");
    }
  }

  public checkPass (password: HTMLInputElement, confirmationPassword: HTMLInputElement): void {
    let passV = password.value;
    let confirmationPassV = confirmationPassword.value;
    if (passV == confirmationPassV) {
      console.log("Does not return error - Both are equal.");
    } else {
      console.log("Return mat-error.");
    }
  }

  /**
   * Change to value clicked in the radio box.
   * @param event
   */
  radioChange(event: MatRadioChange): void {
    this.user_type = event.value;
    // this.registerForm.value.role = this.user_type;
  }
}

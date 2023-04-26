import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/User.model';
import { LoginService } from 'src/app/service/login/login.service';
import { AuthenticationService } from '../authentication.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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

  private authService   : AuthenticationService;




  private loginService  : LoginService = new LoginService(this.router, this.http);

  constructor (
    private router        : Router,
    private formBuilder   : FormBuilder,
    private http          : HttpClient,
  ) {
    this.authService      = new AuthenticationService();
    this.email            = new FormControl('', [Validators.required, Validators.email]);
    this.confirmEmail     = new FormControl('', [Validators.required, Validators.email]);
    this.password         = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.confirmPassword  = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.registerForm     = this.formBuilder.group({
      name            : [null, [Validators.required]],
      telephone       : [null, [Validators.required]],
      email           : [null, [Validators.required, Validators.email]],
      confirmEmail    : [null, [Validators.required, Validators.email]],
      password        : [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword : [null, [Validators.required, Validators.minLength(6)]],
      // birthDate    : [null, [Validators.required]],
      role            : [null, Validators.required],
    });
  }

  /**
   * Submit user registry.
   * @todo DB is not saving data as User type.
   * @todo verify whether password and confirmPassword fields are the same. Same to email.
   * @todo validators should give user an error message in the screen
   */
  public onSubmit (): void{
    // console.log( this.registerForm.value.role)
    this.spinner.emit(false);
    let user: User = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      role: this.registerForm.value.role,
      telephone: this.registerForm.value.telephone
    };

    console.log(user);

    this.loginService.registerUser(user)
    .pipe (
      catchError((error, caught) => {
        console.log('An error occurred:', error);
        // this.spinner.emit(true);
        return of(null);
      })
    )
    .subscribe({
      next: (data) => {
          console.log(data);
          console.log("Should open a modal/snack bar to tell the user that operation was successful.");
          this.spinner.emit(true);
      },
      error: (error) => {
        console.log(error);
        console.log("Should open a modal/snack bar to tell the user that an error happend.");
        this.spinner.emit(true);
        this.loginService.logout();
      }
    });
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

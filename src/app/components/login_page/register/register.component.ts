import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm     : FormGroup;

  constructor (
    private _formBuilder  : FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,

  ) {
    this.registerForm = this._formBuilder.group({
      name        : [null, [Validators.required]],
      email       : [null, [Validators.required, Validators.email]],
      password    : [null, [Validators.required]],
      birthDate   : [null, [Validators.required]],
      user        : [null, [Validators.required]],
    });
  }

  /**
   * Submit user registry
   * @todo create connection with backend.
   */
  public onSubmit (): void {
    console.log(this.registerForm.value);
    localStorage.setItem('registerUser',JSON.stringify(this.registerForm.value));//REMOVE AFTER CONNECTION WITH BACKEND
    this.dialogRef.close();
  }

}

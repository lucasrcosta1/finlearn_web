import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm     : FormGroup;
  private _loginService   : LoginService;

  constructor (
    private _formBuilder  : FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    private _http: HttpClient,
    private _router: Router,

  ) {
    this._loginService = new LoginService(_router,_http);
    this.registerForm = this._formBuilder.group({
      name        : [null, [Validators.required]],
      email       : [null, [Validators.required, Validators.email]],
      password    : [null, [Validators.required]],
      birthDate   : [null, [Validators.required]],
      user_type   : [null, [Validators.required]],
    });
  }

  /**
   * Submit user registry
   * @todo create connection with backend.
   */
  public async onSubmit (): Promise<void> {
    console.log(this.registerForm.value);
    let a = this._loginService.postUser(this.registerForm.value);
    a.subscribe(
      data => {
        console.log(data);
      }
    )
    // localStorage.setItem('registerUser',JSON.stringify(this.registerForm.value));//REMOVE AFTER CONNECTION WITH BACKEND
    // this.dialogRef.close();
  }

}

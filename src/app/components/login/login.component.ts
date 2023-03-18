import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login/login.model';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm  : FormGroup;
  public login      : Login = new Login();

  private _loginService: LoginService;

  constructor(
    private _formBuilder  : FormBuilder,
    private _router: Router,
  ) {
    this._loginService = new LoginService(_router);
    this.loginForm = this._formBuilder.group({
      email   :     [this.login.email,    [Validators.required, Validators.email]],
      password:     [this.login.password, [Validators.required]],
    });
  }

  ngOnInit(): void { }

  /**
   * Submit data written in the form.
   */
  public onSubmit (): void {
    console.log("hi",this.loginForm.value);
    this._checkLoginAndRedirect(this.loginForm.value.email, this.loginForm.value.password);
  }


  private _checkLoginAndRedirect (username: string, password: string): void {
    let logged: boolean = false;

    try {
      logged = this._loginCheck(username, password);
      if (logged) {
        console.log("I'm going HOME!");
        this._loginService.redirectToHome();
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  }


  /**
   * Check whether login is successfull or failed.
   * @param username
   * @param password
   * @returns
   */
  private _loginCheck (username: string, password: string): boolean {
    return this._loginService.isLoggedIn(username,password);
  }
}

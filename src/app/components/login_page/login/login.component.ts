import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Login } from '../../../models/login/login.model';
import { RegisterComponent } from '../register/register.component';
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
    private _appComponent: AppComponent,
    private _http: HttpClient,
    private _router: Router,
    public dialog: MatDialog,
  ) {
    this._loginService = new LoginService(_router,_http,dialog);
    this.loginForm = this._formBuilder.group({
      email   :     [this.login.email,    [Validators.required, Validators.email]],
      password:     [this.login.password, [Validators.required]],
    });
    this._appComponent.login = false;
  }

  ngOnInit(): void { }

  /**
   * Open modal to register a new user.
   * @todo open modal inside login service.
   */
  public openModalRegister (): void{
    const dialogConfig              = new MatDialogConfig();
    dialogConfig.disableClose       = false;
    dialogConfig.autoFocus          = true;
    dialogConfig.width              = "40%";
    dialogConfig.enterAnimationDuration = '500ms';
    dialogConfig.height             = "auto";
    dialogConfig.panelClass         = 'management-styles';

    let dialogRef = this.dialog.open(RegisterComponent, dialogConfig);
  }

  /**
   * Submit data written in the form.
   */
  public onSubmit (): void {
    this.redirect(this.loginForm.value.email, this.loginForm.value.password);
  }

  /**
   * Check and redirect login.
   * @param username
   * @param password
   */
  public redirect (username: string, password: string): void {
    let logged: boolean = false;

    try {
      logged = this._loginCheck(username, password);
      if (logged) {
        this._appComponent.login = true; // activate header/sidebar/footer
        this._loginService.redirectToHome();
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  }

  /**
   * Check whether login was successfull or not.
   * @param username
   * @param password
   * @returns
   */
  private _loginCheck (username: string, password: string): boolean {
    return this._loginService.isLoggedIn(username,password);
  }

  /**
   * Open modal with login options
   */
  public openModalLoginWith (): void {
    this._loginService.loginWith();
  }

  /**
   * Get all users.
   */
  public getUsers (): void {
    let a = this._loginService.getUsers();
    console.log("Got from backend:",a);
  }

}

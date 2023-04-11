import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Login } from 'src/app/models/login/login.model';
import { LoginService } from '../login/service/login.service';

@Component({
  selector: 'app-outside-login',
  templateUrl: './outside-login.component.html',
  styleUrls: ['./outside-login.component.css']
})
export class OutsideLoginComponent {
  private _loginService: LoginService;
  private _user: Login = new Login();
  private _appComponent: AppComponent = new AppComponent();

  public get user(): Login {
    return this._user;
  }
  public set user(value: Login) {
    this._user = value;
  }

  constructor (
    private _router: Router,
    public dialog: MatDialog,
    private _http: HttpClient,
  ) {
    this._loginService = new LoginService(_router, _http, dialog);
  }

  /**
   * Pass register to be handled by the api.
   * @todo Add login verification (google - https://www.youtube.com/watch?v=1hMvJsSDnvU)
   * @param api
   */
  public checkLogin (api: string): void {
    this.user = this._loginService.connectApiClicked(api);
    this._loginService.isLoggedIn(this.user.email, this.user.password);
  }

}

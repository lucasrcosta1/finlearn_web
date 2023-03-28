import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from '../login_page/login/service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private _loginService: LoginService;

  constructor(
    private _appComponent: AppComponent,
    private _router: Router,
  ) {
    this._loginService = new LoginService(_router);
  }

  /**
   * Log client out.
   */
  public logout (): void {
    this._appComponent.login = true; // activate header/sidebar/footer
    this._loginService.logout();
  }
}

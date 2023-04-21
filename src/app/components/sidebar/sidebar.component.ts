import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Tab } from 'src/app/models/Tab.model';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private _loginService: LoginService;

  public activeItem: number = 0;
  public tabs = new Set<Tab>();


  constructor(
    private _appComponent: AppComponent,
    private _router: Router,
    private _http: HttpClient,
  ) {
    this._loginService = new LoginService(_router,_http);
    this.tabs.add(new Tab('fa fa-home','#'));
    this.tabs.add(new Tab('fa fa-graduation-cap','/learn'));
    this.tabs.add(new Tab('fa fa-line-chart','/practice'));
    this.tabs.add(new Tab('fa fa-users','/community'));
    this.tabs.add(new Tab('fa fa-search','/support'));
  }

  /**
   * Log client out.
   */
  public logout (): void {
    this._appComponent.login = true; // activate header/sidebar/footer
    this._loginService.appComponent.login = true;
    this._loginService.logout();
  }

  /**
   * Change color clicked tab.
   */
  public activeProject(index: number): void {
    console.log(index)
    this.activeItem = index;
  }
}

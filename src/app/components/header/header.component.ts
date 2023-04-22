import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Tab } from 'src/app/models/Tab.model';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _loginService: LoginService;

  public activeItem: number = 2;
  public tabs = new Set<Tab>();

  constructor (
    private _appComponent: AppComponent,
    private _router: Router,
    private _http: HttpClient,
  ) {
    this._loginService = new LoginService(_router,_http);
  }

  ngOnInit (): void {
    this.tabs = this._addAllTabs(this.tabs);
    this._getLabelActive();
    console.log(this.tabs);

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
  public activateTab(label: string): void {
    this.tabs.forEach(
      (tab: Tab) => {
        if (tab.label == label) {
          tab.active = true;
          this.activeItem = tab.id;
        } else tab.active = false;
      }
    );
  }

  /**
   * Get the actual tab and add mark it as active.
   */
  private _getLabelActive (): void {
    let url = window.location.pathname;
    this.activateTab(url.split('/')[1]);
  }

  /**
   * Add all tabs to the Set tab.
   */
  private _addAllTabs (tabs: Set<Tab>): Set<Tab> {
    tabs.add(new Tab(0,'fa fa-graduation-cap', '/learn', 'learn', false));
    tabs.add(new Tab(1,'fa fa-line-chart', '/practice', 'practice', false));
    tabs.add(new Tab(2,'fa fa-home', '/home', 'home', false)); //Add a new FinLearn logo to match the new structure.
    tabs.add(new Tab(3,'fa fa-users', '/community', 'community', false));
    tabs.add(new Tab(4,'fa fa-search', '/support', 'support', false));
    return tabs;
  }
}

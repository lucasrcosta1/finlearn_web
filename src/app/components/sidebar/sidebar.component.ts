import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeRoute: string = '';

  private _loginService: LoginService;

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {
    this._loginService = new LoginService(_router,_http);
  }

  ngOnInit (): void {
    this._getLabelActive();
  }

  setActiveRoute(route: string): void {
    if (route == "/") route = "/home";
    this.activeRoute = route;
  }

  togglePopUp (): void {
    let popup = document.getElementById("user-popup");
    if (popup) {
      popup.style.display = (popup.style.display === "block") ? "none" : "block";
    } else console.error ("ERROR_DIV_NULL: user-popup");
  }

  logout () {
    this._router.navigate(['/auth/login']);
    this.setActiveRoute("/");
    this._loginService.logout();
  }

  /**
   * Get the actual tab and add mark it as active.
   */
  private _getLabelActive (): void {
    let url = window.location.pathname;
    this.setActiveRoute(url);
  }
}

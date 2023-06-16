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
  activeRoute: string = "";
  username = "";
  email = "";

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _loginService: LoginService
  ) {
  }

  ngOnInit (): void {
    if (localStorage.getItem('username') && localStorage.getItem('email')) { // Already logged
      this._loginService.getUser().subscribe(
        user => {
          if (user && user.email != '') {
            console.log(user)
            if (user.name != localStorage.getItem('username')! ) {
              localStorage.setItem('username', user.name);
            }
            if (user.email != localStorage.getItem('email')!) {
              localStorage.setItem('username', user.email);
            }

            this.username = user.name;
            this.email    = user.email;
          } else {
            this.username = localStorage.getItem('username')!;
            this.email    = localStorage.getItem('email')!;
          }
        }
      );
    } else { // Not logged yet.
      console.error("ERROR: Username or email is null");
      this._loginService.getUser().subscribe(
        user => {
          this.username = user.name;
          this.email    = user.email;
        }
      );
    }
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
    let url = window.location.pathname.split('/')[1];
    if (url == "page_not_found") this.setActiveRoute('');
    this.setActiveRoute(`/${url}`);
  }
}

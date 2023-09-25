import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarToggled = false;
  activeRoute = "";
  username = "";
  email = "";

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _loginService: LoginService,
    private el: ElementRef,
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

  /**
   * Set active route.
   * @param route 
   */
  setActiveRoute(route: string): void {
    if (route == "/") route = "/home";
    this.activeRoute = route;
  }

  /**
   * Toogle user popup.
   */
  openUserPopup (): void {

    const popup = document.getElementById("user-popup");
    if (popup) {

      popup.style.display = "block";
    
    } else console.error ("ERROR_DIV_NULL: user-popup");

  }

  /**
   * Close user edition's popup.
   */
  closeUserPopup (): void {

    const popup = document.getElementById("user-popup");
    if (popup) {

      popup.style.display = "none";
    
    } else console.error ("ERROR_DIV_NULL: user-popup");

  }

  logout () {
    this._router.navigate(['/auth/login']);
    this.setActiveRoute("/");
    this._loginService.logout();
  }

  openSidebar(): void {
    
    this.isSidebarToggled = true;

  }

  closeSidebar (): void {

    this.isSidebarToggled = false;

  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {

    const divClicked = event.target as HTMLElement;
    if (divClicked) {
      this._handleSidebarStatus(divClicked);
      this._handleUserEditionPopup(divClicked);
    }

  }

  /**
   * Get the actual tab and add mark it as active.
   */
  private _getLabelActive (): void {
    let url = window.location.pathname.split('/')[1];
    if (url == "page_not_found") this.setActiveRoute('');
    this.setActiveRoute(`/${url}`);
  }

  /**
   * Handle click on sidebar.
   * @param divClicked 
   */
  private _handleSidebarStatus (divClicked: HTMLElement): void {

    if (this._checkWhetherSidebarShoudBeClosed(divClicked.id)) {
        
      this.closeSidebar();

    }

  }

  /**
   * Handle click on user edition popup.
   * @param divClicked 
   */
  private _handleUserEditionPopup (divClicked: HTMLElement): void {

    this._checkWhetherUserEditionPopupShoudBeClosed(divClicked.id) ? this.openUserPopup() : this.closeUserPopup();

  }

  /**
   * Check whether sidebar should be closed.
   * @param id 
   */
  private _checkWhetherSidebarShoudBeClosed(id: string): boolean {

    const enableSpotsToBeClicked = ["manage-user-div", "manage-user-icon-div", "manage-user-icon", "manage-user-details-div", "manage-user-details-name", "manage-user-details-email", "user-popup", "sidebar", "show-sidebar", "icon-show-sidebar"];
    let canBeClicked = true;
    enableSpotsToBeClicked.forEach (
      enabledSpot => {

        if (enabledSpot == id) canBeClicked = false; 

      }
    )
    return canBeClicked;

  }

  /**
   * Check whether user edition popup should be closed.
   * @param id 
   */
  private _checkWhetherUserEditionPopupShoudBeClosed (id: string): boolean {

    const enableSpotsToBeClicked = ["manage-user-div", "manage-user-icon-div", "manage-user-icon", "manage-user-details-div", "manage-user-details-name", "manage-user-details-email", "user-popup"];
    let canBeClicked = false;
    enableSpotsToBeClicked.forEach (
      enabledSpot => {

        if (enabledSpot == id) canBeClicked = true;

      }
    )
    return canBeClicked;

  }

}

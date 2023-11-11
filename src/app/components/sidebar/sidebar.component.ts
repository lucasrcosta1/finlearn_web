import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../authentication/login/login.service';
import { environment } from 'src/environments/environment';

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

    // this.isSidebarToggled = this._checkWhetherSidebarShoudBeClosedBasedOnScreenWidth(window.innerWidth);

  }

  ngOnInit (): void {

    const userInfo = this._loginService.getUserInfo();
    if (userInfo) {

      this.username = userInfo.name;
      this.email = userInfo.email;

    } else {

      window.location.reload();

    }

    if (localStorage.getItem('username') && localStorage.getItem('email')) { // Already logged
      
    } else { // Not logged yet.
      console.error("ERROR: Username or email is null");
      this._loginService.getUser().subscribe(
        user => {

          if (user) {
            this.username = user.name;
            this.email    = user.email;
          }
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

  // @HostListener('window:resize', ['$event'])
  // onResize(event): void {

  //   this.isSidebarToggled = this._checkWhetherSidebarShoudBeClosedBasedOnScreenWidth(window.innerWidth);
  // }

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


  /**
   * Check whether sidebar should be closed or opened, based on screen's width.
   * @param windowWidth 
   * @returns 
   */
  private _checkWhetherSidebarShoudBeClosedBasedOnScreenWidth (windowWidth: number): boolean {

    const actualPath = (window.location.pathname).split("/");
    if (actualPath[1] != environment.AUTHENTICATION) {
      if (windowWidth >= 992) {
        return true;
      } else {
       return false;
      }
    } return false;

  }

}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-smaller-screen',
  templateUrl: './login-smaller-screen.component.html',
  styleUrls: ['./login-smaller-screen.component.css', "../../../../../styles.css"]
})
export class LoginSmallerScreenComponent {

  @Output() 
  triggerRegistry = new EventEmitter<boolean>();
  imagePath = "../../../../../assets/images/finlearnLogo.png";
  tabTitle = "Login";

  /**
   * Emit event and enable register page.
   */
  enableRegisterPage (): void {

    this.triggerRegistry.emit(true);

  }

}

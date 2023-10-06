import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-smaller-screen',
  templateUrl: './register-smaller-screen.component.html',
  styleUrls: ['./register-smaller-screen.component.css']
})
export class RegisterSmallerScreenComponent {

  @Output() 
  triggerLogin = new EventEmitter<boolean>();

  /**
   * Emit event and enable login page.
   */
  enableLoginPage (): void {

    this.triggerLogin.emit(true);

  }
  
}

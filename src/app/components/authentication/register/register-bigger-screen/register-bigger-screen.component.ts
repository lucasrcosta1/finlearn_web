import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-bigger-screen',
  templateUrl: './register-bigger-screen.component.html',
  styleUrls: ['./register-bigger-screen.component.css']
})
export class RegisterBiggerScreenComponent {

  @Output() 
  triggerLogin = new EventEmitter<boolean>();

  /**
   * Emit event and enable login page.
   */
  enableLoginPage (): void {

    this.triggerLogin.emit(true);

  }
  
}

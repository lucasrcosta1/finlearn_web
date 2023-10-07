import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-bigger-screen',
  templateUrl: './login-bigger-screen.component.html',
  styleUrls: ['./login-bigger-screen.component.css']
})
export class LoginBiggerScreenComponent {

  @Output() 
  triggerRegistry = new EventEmitter<boolean>();

  /**
   * Emit event and enable register page.
   */
  enableRegisterPage (): void {

    this.triggerRegistry.emit(true);

  }

}

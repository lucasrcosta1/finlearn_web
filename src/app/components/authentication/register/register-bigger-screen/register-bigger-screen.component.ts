import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-bigger-screen',
  templateUrl: './register-bigger-screen.component.html',
  styleUrls: ['./register-bigger-screen.component.css', "../../../../../styles.css"]
})
export class RegisterBiggerScreenComponent {

  @Output() 
  triggerLogin = new EventEmitter<boolean>();
  @Input()
  imagePath: string | null = null;
  @Input()
  tabTitle: string | null = null;

  /**
   * Emit event and enable login page.
   */
  enableLoginPage (): void {

    this.triggerLogin.emit(true);

  }
  
}

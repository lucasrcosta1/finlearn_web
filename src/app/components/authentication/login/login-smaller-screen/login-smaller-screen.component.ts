import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-smaller-screen',
  templateUrl: './login-smaller-screen.component.html',
  styleUrls: ['./login-smaller-screen.component.css', "../../../../../styles.css"]
})
export class LoginSmallerScreenComponent {

  @Output() 
  triggerRegistry = new EventEmitter<boolean>();
  @Input()
  imagePath: string | null = null;
  @Input()
  tabTitle: string | null = null

  /**
   * Emit event and enable register page.
   */
  enableRegisterPage (): void {

    this.triggerRegistry.emit(true);

  }

}

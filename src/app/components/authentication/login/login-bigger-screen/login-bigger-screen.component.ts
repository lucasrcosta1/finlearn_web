import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-bigger-screen',
  templateUrl: './login-bigger-screen.component.html',
  styleUrls: ['./login-bigger-screen.component.css', "../../../../../styles.css"]
})
export class LoginBiggerScreenComponent {

  @Output() 
  triggerRegistry = new EventEmitter<boolean>();
  @Input()
  imagePath: string | null = null;
  @Input()
  tabTitle: string | null = null;

  /**
   * Emit event and enable register page.
   */
  enableRegisterPage (): void {

    this.triggerRegistry.emit(true);

  }

}

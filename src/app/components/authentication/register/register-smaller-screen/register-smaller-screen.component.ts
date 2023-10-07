import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-smaller-screen',
  templateUrl: './register-smaller-screen.component.html',
  styleUrls: ['./register-smaller-screen.component.css', "../../../../../styles.css"]
})
export class RegisterSmallerScreenComponent {

  @Output() 
  triggerLogin = new EventEmitter<boolean>();
  @Input()
  imagePath: string | null = null;
  @Input()
  tabTitle: string | null = null;

  ngOnInit (): void {

    console.log(this.tabTitle);

  }

  /**
   * Emit event and enable login page.
   */
  enableLoginPage (): void {

    this.triggerLogin.emit(true);

  }
  
}

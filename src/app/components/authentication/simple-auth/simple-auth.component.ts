import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-simple-auth',
  templateUrl: './simple-auth.component.html',
  styleUrls: ['./simple-auth.component.css']
})
export class SimpleAuthComponent {
  public spinner  = true;
  public register = false;
  public appComponent = new AppComponent();

  @Output()
  login = new EventEmitter<boolean>();
  loggedIn: any;

  constructor () {

  }

  /**
   * Change spinner's value.
   * @param value
   */
  public changeSpinnerValue (value: boolean): void {
    this.spinner = value;
  }
}

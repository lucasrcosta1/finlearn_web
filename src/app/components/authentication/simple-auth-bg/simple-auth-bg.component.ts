import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-auth-bg',
  templateUrl: './simple-auth-bg.component.html',
  styleUrls: ['./simple-auth-bg.component.css']
})
export class SimpleAuthBgComponent {
  @Input()
  public register: boolean = false;

  constructor () {

  }
}

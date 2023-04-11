import { Component } from '@angular/core';


@Component({
  selector: 'app-simple-auth',
  templateUrl: './simple-auth.component.html',
  styleUrls: ['./simple-auth.component.css']
})
export class SimpleAuthComponent {
  public register: boolean = false;
  constructor () {

  }
}

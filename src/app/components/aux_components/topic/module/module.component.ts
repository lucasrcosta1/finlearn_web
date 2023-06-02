import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  constructor (
    private router: Router
  ) {}

  goBack (): void {
    this.router.navigate(['/learn']);
  }

}

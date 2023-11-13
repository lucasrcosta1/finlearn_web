import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  low_component_tab: string = 'progress_tab';

  constructor(private router: Router) {}

  switch_to_tab(tab: string) {
    this.low_component_tab = tab;
  }

  redirectToPage() {
    console.log('redirectToPage called');
    this.router.navigate([`/learn/titulos/1`]);
  }

}

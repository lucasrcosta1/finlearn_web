import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  low_component_tab: string = 'progress_tab';

  switch_to_tab(tab: string) {
    this.low_component_tab = tab;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-stats',
  templateUrl: './module-stats.component.html',
  styleUrls: ['./module-stats.component.css']
})
export class ModuleStatsComponent {

  @Input()
  overallProgress: number | null = null;

}

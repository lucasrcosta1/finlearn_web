import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-stats',
  templateUrl: './topic-stats.component.html',
  styleUrls: ['./topic-stats.component.css']
})
export class TopicStatsComponent {

  @Input()
  overallProgress: number | null = null;

  ngOnInit (): void {

    console.log(this.overallProgress);
    document.documentElement.style.setProperty('--percentage', `${this.overallProgress}`);

  }
  
}

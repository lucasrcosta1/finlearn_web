import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number = 0;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    let scrollProgress = document.getElementById('progress');
    scrollProgress!.style.background = `conic-gradient(var(--progress-done) ${this.progress}%, var(--progress-to-do) ${this.progress}%)`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}

import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/modules/Module.model';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  public progress     = 45;
  public noOfFiles    = 13;
  public completed    = false;
  public numberOfStoriesLive = 3;
  public numberOfStoriesMorePopularClass = 4;

  public ngOnInit(): void {
    // this.updateProgress();
  }

  /**
   * Give a delay to the resolve the promisse.
   * @param ms
   * @returns
   */
  public delay(ms: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  /**
   * Update progress.
   */
  public async updateProgress() {
    this.completed = false;
    let n = 100 / this.noOfFiles;
    for (let i = 0; i <= this.noOfFiles; i++) {
      await this.delay(500);
      this.progress = Math.round(i * n);
      console.log(i);
    }
    this.completed = true;
  }


}

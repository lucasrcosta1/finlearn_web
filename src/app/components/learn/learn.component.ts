import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/modules/module.model';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  progress = 45;
  noOfFiles = 13;
  completed = false;
  moduleSet = new Set<Module>();



  public ngOnInit(): void {
    this.moduleSet.add(new Module('Negociação do Ouro','10:00','../../../assets/images/classes/gold.jpeg'));
    this.moduleSet.add(new Module('Papeis B3','30:00','../../../assets/images/classes/papel.jpeg'));
    this.moduleSet.add(new Module('O que é selic?','25:00','../../../assets/images/classes/selic.jpeg'));
    this.moduleSet.add(new Module('Tesouro Direto','20:00','../../../assets/images/classes/tesouro_direto.jpeg'));
    // this.updateProgress();
  }

  delay(ms: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  async updateProgress() {
    this.completed = false;
    let n = 100 / this.noOfFiles;
    for (let i = 0; i <= this.noOfFiles; i++) {
      await this.delay(500);
      this.progress = Math.round(i * n);
      console.log(i);
    }
    this.completed = true;
  }

  /**
   * Redirect user to the class clicked.
   * @param module_class
   */
  goTo (module_class: string): void {

  }
}

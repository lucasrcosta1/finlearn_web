import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-practice-result',
  templateUrl: './practice-result.component.html',
  styleUrls: ['./practice-result.component.css']
})
export class PracticeResultComponent {

  constructor (
    private _pratiqueService: PratiqueService,
  ) {}

  public goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }
  
}

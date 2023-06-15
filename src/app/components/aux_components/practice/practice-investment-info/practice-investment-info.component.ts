import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-practice-investment-info',
  templateUrl: './practice-investment-info.component.html',
  styleUrls: ['./practice-investment-info.component.css']
})
export class PracticeInvestmentInfoComponent {

  constructor (
    private _pratiqueService: PratiqueService,
  ) {}

  public goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }

}

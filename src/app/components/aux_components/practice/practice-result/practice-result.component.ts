import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-practice-result',
  templateUrl: './practice-result.component.html',
  styleUrls: ['./practice-result.component.css']
})
export class PracticeResultComponent {
  
  duration: number;
  initial_investment: string;
  monthly_investment: string;
  final_return: string
  rate: string;

  constructor (
    private _pratiqueService: PratiqueService,
  ) {
    this.duration = this._pratiqueService.getDuration()!;
    this.initial_investment = this._pratiqueService.formattedPrincipal;
    this.monthly_investment = this._pratiqueService.formattedMonthlyInvestment;
    this.final_return = this._pratiqueService.formattedFutureValue;
    this.rate = this._pratiqueService.getRate()!;
  }

  /**
   * Send user to the requested page.
   * @param page
   */
  goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }

}

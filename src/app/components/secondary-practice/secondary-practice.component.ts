import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InvestType } from 'src/app/models/practice/InvestType.model';
import { ApiService } from 'src/app/service/api/api.service';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-secondary-practice',
  templateUrl: './secondary-practice.component.html',
  styleUrls: ['./secondary-practice.component.css']
})
export class SecondaryPracticeComponent {

  image = "/assets/images/pratique/bro.svg";
  fieldInvestType = new Map<number, InvestType>();

  constructor (
    private _pratiqueService: PratiqueService,
    private _apiService: ApiService,
  ) {}

  async ngOnInit (): Promise<void> {

    this.fieldInvestType =  await this._apiService.getInvestmentTypes();

  }

  /**
   * Send user to the requested page.
   * @param page
   */
  public goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }

}

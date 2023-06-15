import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-practice-investment-info',
  templateUrl: './practice-investment-info.component.html',
  styleUrls: ['./practice-investment-info.component.css']
})
export class PracticeInvestmentInfoComponent {
  public formInvestmentInfo: FormGroup;
  public rangeValue = 64;

  constructor (
    private _pratiqueService: PratiqueService,
    private _formBuilder: FormBuilder,
  ) {
    this.formInvestmentInfo = this._formBuilder.group({
      initialInvestment: ['', Validators.required],
      howLong: [this.rangeValue, Validators.required],
      howMany: ['', Validators.required]
    });
  }

  /**
   * Submit investment info to the service.
   */
  public onSubmit (): void {
    if (this.formInvestmentInfo.valid) {
      this._pratiqueService.setInitialInvestment(this.formInvestmentInfo.value.initialInvestment);
      this._pratiqueService.setDuration(this.formInvestmentInfo.value.howLong);
      this._pratiqueService.setMonthlyInvestment(this.formInvestmentInfo.value.howMany);
      this.goTo(3);
    }
  }

  /**
   * Send user to the requested page.
   * @param page
   */
  public goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }

  /**
   * Listen for range's value from input.
   * @param event
   */
  public onRangeInput(event: any): void {
    this.rangeValue = event.target.value;
  }
}

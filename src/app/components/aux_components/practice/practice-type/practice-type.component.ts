import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvestmentType } from 'src/app/models/practice/InvestmentType.model';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-practice-type',
  templateUrl: './practice-type.component.html',
  styleUrls: ['./practice-type.component.css']
})
export class PracticeTypeComponent {

  choosenInvestmentForm: FormGroup;
  fieldInvestmentTypes: InvestmentType[] | null = null;
  clicked = false;

  constructor (
    private _pratiqueService: PratiqueService,
    private _formBuilder: FormBuilder,
  ) {
    this.choosenInvestmentForm = this._createForm(this._formBuilder);
  }

  async ngOnInit (): Promise<void> {

    this.fieldInvestmentTypes =  await this._pratiqueService.getInvestmentTypes();

  }

  /**
   * Save form value in the service and go to next page.
   */
  onSubmit (): void {
    
    const id = Number(this.choosenInvestmentForm.value.investmentId);
    this._pratiqueService.goTo(2, id);

  }

  /**
   * Send user to the requested page.
   * @param page
   */
  goTo (page: number): void {

    this._pratiqueService.goTo(page);

  }

  /**
   * Calculate interest rate.
   * @param fieldInvestmentType 
   * @returns 
   */
  calculateInterestRate (fieldInvestmentType: InvestmentType | null): string {

    const fistMessage = "Taxa anual: ";
    if (fieldInvestmentType) {

      let anualTax = 0;
      if (fieldInvestmentType.interestRate && fieldInvestmentType.redemptionPeriodInYears && fieldInvestmentType.redemptionPeriodInYears > 1) {

        anualTax = Number(parseFloat(String(fieldInvestmentType.interestRate / fieldInvestmentType.redemptionPeriodInYears * 100)).toFixed(3));

      } else if (fieldInvestmentType.interestRate && fieldInvestmentType.redemptionPeriodInYears && fieldInvestmentType.redemptionPeriodInYears == 1) {

        anualTax = fieldInvestmentType.interestRate * 100;

      } return fistMessage + anualTax + "%";
      
    } return fistMessage + "0%";

  }

  investmentTypeSelected (id: number | null): void {
    
    if (this.fieldInvestmentTypes) {

      this.fieldInvestmentTypes = this._removeAnyOtherSelectedInvestment(this.fieldInvestmentTypes);
      if (id != null) {
  
        this.fieldInvestmentTypes[id].clicked = !this.fieldInvestmentTypes[id].clicked;
        this.clicked = true;
        this.choosenInvestmentForm.value.investmentId = id;
  
      }

    }

  }

  /**
   * Create form.
   * @param formBuilder 
   * @returns 
   */
  private _createForm (formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({
      investmentId: [null, Validators.required]
    });

  }


  /**
   * Remove any other selected investment.
   * @param investments 
   * @returns 
   */
  private _removeAnyOtherSelectedInvestment (investments: InvestmentType[]): InvestmentType[] {

    investments.forEach(
      investment => {

        if (investment.clicked) investment.clicked = false;

      }
    );
    return investments;

  }

}


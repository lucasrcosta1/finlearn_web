import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-practice-investment-info',
  templateUrl: './practice-investment-info.component.html',
  styleUrls: ['./practice-investment-info.component.css']
})
export class PracticeInvestmentInfoComponent {
  
  formInvestmentInfo: FormGroup | null = null;
  rangeValue = 1;
  clicked = false;
  investmentName: string | null = null;

  constructor (
    private _pratiqueService: PratiqueService,
    private _formBuilder: FormBuilder,
  ) {}

  async ngOnInit (): Promise<void> {

    const investmentTypeId = Number(this._pratiqueService.getIdForThePage());
    this.formInvestmentInfo = this._createForm(this._formBuilder, investmentTypeId);
    const formInvestmentTypeSelected = await this._pratiqueService.getInvestmentTypeBasedOnId(investmentTypeId);
    this.investmentName = formInvestmentTypeSelected.name;

  }

  /**
   * Submit investment info to the service.
   */
  onSubmit (): void {

    if (this.formInvestmentInfo) {
      console.log(this.formInvestmentInfo.value);
      this.goTo(3);
    }
    // if (this.formInvestmentInfo.valid) {
    //   this._pratiqueService.setInitialInvestment(this.formInvestmentInfo.value.initialInvestment);
    //   this._pratiqueService.setDuration(this.formInvestmentInfo.value.howLong);
    //   this._pratiqueService.setMonthlyInvestment((this.formInvestmentInfo.value.monthlyInvestment == '') ? this.formInvestmentInfo.value.monthlyInvestment = 0 : this.formInvestmentInfo.value.monthlyInvestment);
    //   this.goTo(3);
    // }
  }

  /**
   * Send user to the requested page.
   * @param page
   */
  goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }

  /**
   * Listen for range's value from input.
   * @param event
   */
  onRangeInput(event: any): void {
    this.rangeValue = event.target.value;
    this._canSubmitButtonBeReleased(this.formInvestmentInfo);
  }

  /**
   * Listen for inputs on the initial investment's field.
   */
  onInitialInvestmentInput (event: any): void {

    this._canSubmitButtonBeReleased(this.formInvestmentInfo);

  }

  /**
   * Create form.
   * @param formBuilder 
   * @param investmentType 
   */
  private _createForm (formBuilder: FormBuilder, id: number): FormGroup {

    return formBuilder.group({
      investmentTypeId: [id, Validators.required],
      initialInvestment: [null, Validators.required],
      howLongInYears: [1, Validators.required], 
      monthlyInvestment: [null]
    });

  }

  /**
   * Check whether the submit button should be displayed or hidden.
   * @param form 
   */
  private _canSubmitButtonBeReleased (form: FormGroup | null): void {

    if (form) {
      if ((form.value.initialInvestment != null && form.value.initialInvestment != "") && (form.value.howLongInYears != null && form.value.howLongInYears != "")) {

        this.clicked = true;

      } else {

        this.clicked = false;

      }
    }

  }
}

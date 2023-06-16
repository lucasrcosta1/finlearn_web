import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-practice-type',
  templateUrl: './practice-type.component.html',
  styleUrls: ['./practice-type.component.css']
})
export class PracticeTypeComponent {

  investmentInfoForm: FormGroup;

  constructor (
    private _pratiqueService: PratiqueService,
    private _formBuilder: FormBuilder,
  ) {
    this.investmentInfoForm = this._formBuilder.group({
      rate: ['', Validators.required]
    })
  }

  /**
   * Save form value in the service and go to next page.
   */
  public onSubmit (): void {
    if (this.investmentInfoForm.valid) {
      this._pratiqueService.setRate(this.investmentInfoForm.value.rate);
      this.goTo(2);
    }
  }

  /**
   * Set investment type to the value selected.
   * @param type
   */
  public setRate(type: string): void {
    this.investmentInfoForm.get('rate')?.setValue(type);
  }

  /**
   * Send user to the requested page.
   * @param page
   */
  public goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }

  /**
   * Return button's status based on the form validity.
   * @returns
   */
  public btnStatus (): boolean {
    return !this.investmentInfoForm.valid;
  }
}


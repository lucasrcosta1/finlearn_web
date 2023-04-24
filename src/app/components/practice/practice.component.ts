import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  investmentForm: FormGroup;
  investmentOptions = [
    { type: 'cdb', interestRate: 6, compoundedPeriodsPerYear: 12 },
    { type: 'poupanca', interestRate: 4.5, compoundedPeriodsPerYear: 12 },
    { type: 'fundo', interestRate: 8, compoundedPeriodsPerYear: 1 }
  ];
  selectedInvestment: any = null;
  formattedPrincipal: string = '';
  formattedMonthlyInvestment: string = '';
  formattedFutureValue: string = '';
  showResult: boolean = false;
  simulationResult: any;
  timePeriod: number = 0;

  constructor(private fb: FormBuilder) {
    this.investmentForm = this.fb.group({
      investmentType: ['', Validators.required],
      investmentAmount: ['', Validators.required],
      monthlyInvestment: ['', Validators.required],
      investmentTerm: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.investmentForm = this.fb.group({
      investmentType: ['', Validators.required],
      investmentAmount: ['', Validators.required],
      monthlyInvestment: ['', Validators.required],
      investmentTerm: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    // Verificação se os campos foram preenchidos corretamente
    if (!this.investmentForm.valid) {
      console.log('Formulário inválido.');
      return;
    }

    const selectedInvestmentType = this.investmentForm.controls['investmentType'].value;
    this.selectedInvestment = this.investmentOptions.find(investment => investment.type === selectedInvestmentType);

    // Verificação se foi selecionado um tipo de investimento
    if (!this.selectedInvestment) {
      console.log('Tipo de investimento inválido.');
      return;
    }

    // Cálculo do montante final
    const principal = +this.investmentForm.controls['investmentAmount'].value;
    const monthlyInvestment = +this.investmentForm.controls['monthlyInvestment'].value;
    const interestRate = this.selectedInvestment.interestRate / 100;
    const timePeriod = parseInt(this.investmentForm.controls['investmentTerm'].value, 10);
    console.log(timePeriod);
    if (isNaN(timePeriod) || timePeriod <= 0) {
      console.log('Período de tempo inválido.');
      return;
    }
    const compoundedPeriodsPerYear = this.selectedInvestment.compoundedPeriodsPerYear;
    const totalMonths = timePeriod;
    const monthlyInterestRate = interestRate / compoundedPeriodsPerYear;
    const totalCompoundedPeriods = compoundedPeriodsPerYear * (timePeriod / 12);
    const futureValue = (principal * (1 + monthlyInterestRate) ** totalCompoundedPeriods) + (monthlyInvestment * (((1 + monthlyInterestRate) ** totalCompoundedPeriods - 1) / monthlyInterestRate));

    console.log(`Principal: ${principal}`);
    console.log(`Monthly Investment: ${monthlyInvestment}`);
    console.log(`Interest Rate: ${interestRate}`);
    console.log(`Time Period: ${timePeriod}`);
    console.log(`Compounded Periods Per Year: ${compoundedPeriodsPerYear}`);
    console.log(`Total Months: ${totalMonths}`);
    console.log(`Monthly Interest Rate: ${monthlyInterestRate}`);
    console.log(`Total Compounded Periods: ${totalCompoundedPeriods}`);
    console.log(`Future Value: ${futureValue}`);

    // Formatação dos valores para exibição na tela
    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    this.formattedPrincipal = formatter.format(principal);
    this.formattedMonthlyInvestment = formatter.format(monthlyInvestment);
    this.formattedFutureValue = formatter.format(futureValue);

    // Exibição do resultado
  this.showResult = true;
}
}
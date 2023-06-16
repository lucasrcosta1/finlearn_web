import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Investment } from 'src/app/models/practice/Investment.model';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PratiqueService {

  formattedPrincipal: string = '';
  formattedMonthlyInvestment: string = '';
  formattedFutureValue: string = '';

  private investment: Investment;
  private module: UrlSegment[]=[];

  constructor(
    private _router: Router,
    private _api: ApiService,
    private route: ActivatedRoute,
  ) {;
    this._checkValidPage();
    this.investment = new Investment();

  }

  /**
   * Send user to the requested page.
   * @param page
   */
  public async goTo (page: number): Promise<void> {
    let route;
    switch (page) {
      case 0:
        route = "/practice";
        break;
      case 1:
        route = "/practice/type";
        break;
      case 2:
        route = "/practice/type/investmentInfo";
        break;
      case 3:
        route = "/practice/type/investmentInfo/result";
        if (this._checkValidityOfFields(this.investment)) {
          // let requestBody = this.investment;
          // console.log(requestBody);
          // let rs = await this._api.post('/practice', requestBody, null);
          // if (rs.getSuccess()) {
          //   console.log("Success", rs.getResponse());
          //   this._snackBarService.openSnackBar(1,"Post curtido!");
          // } else {
          //   console.log("Error", rs.getResponse());
          //   this._snackBarService.openSnackBar(1,rs.getResponse());
          // }

          // remove bellow after finished with post method
          this._calculateResult(this.investment);
        } else {
          console.error("ERROR: Cannot calculate result with undefined field(s)");
        }
        break;
      default:
        route = undefined;
        break;
    }

    if(route) {
      this._router.navigate([route]);
    } else {
      console.error("ERROR: Wrong page:", page);
    }
  }

  public setRate (rate: string): void {
    this.investment.rate = rate;
  }
  public getRate (): string | undefined {
    return this.investment.rate;
  }

  public setInitialInvestment (initial_investment: number): void {
    this.investment.initial_investment = initial_investment;
  }
  public getInitialInvestment (): number | undefined {
    return this.investment.initial_investment;
  }

  public setDuration (duration: number): void {
    this.investment.duration = duration;
  }
  public getDuration (): number | undefined {
    return this.investment.duration;
  }

  public setMonthlyInvestment (monthly_investment: number): void {
    this.investment.monthly_investment = monthly_investment;
  }
  public getMonthlyInvestment (): number | undefined {
    return this.investment.monthly_investment;
  }

  private _checkValidityOfFields (investment: Investment): boolean {
    if (
      this.getRate() &&
      this.getInitialInvestment() &&
      this.getDuration() &&
      this.getMonthlyInvestment()
    ) { return true; }
    else return false;
  }

  private _calculateResult (investment: Investment): void {

    const principal = +investment.initial_investment!;
    const monthlyInvestment = +investment.monthly_investment!;
    const timePeriod = investment.duration!;
    // console.log(timePeriod);
    if (isNaN(timePeriod) || timePeriod <= 0) {
      console.log('Período de tempo inválido.');
      return;
    }
    let interestRate,compoundedPeriodsPerYear;
    if (investment.rate == 'cdb') {
      interestRate = 0.06;
      investment.rate = 'CDB';
      compoundedPeriodsPerYear = 12;
    } else if (investment.rate == 'poupanca') {
      interestRate = 0.045;
      investment.rate = 'Poupança';
      compoundedPeriodsPerYear = 12;
    } else if (investment.rate == 'fundo') {
      interestRate = 0.08;
      investment.rate = 'Fundo de investimento';
      compoundedPeriodsPerYear = 12;
    }

    const totalMonths = timePeriod;
    const monthlyInterestRate = interestRate / compoundedPeriodsPerYear;
    const totalCompoundedPeriods = compoundedPeriodsPerYear * (timePeriod / 12);
    const futureValue = (principal * (1 + monthlyInterestRate) ** totalCompoundedPeriods) + (monthlyInvestment * (((1 + monthlyInterestRate) ** totalCompoundedPeriods - 1) / monthlyInterestRate));

    // console.log(`Principal: ${principal}`);
    // console.log(`Monthly Investment: ${monthlyInvestment}`);
    // console.log(`Interest Rate: ${interestRate}`);
    // console.log(`Time Period: ${timePeriod}`);
    // console.log(`Compounded Periods Per Year: ${compoundedPeriodsPerYear}`);
    // console.log(`Total Months: ${totalMonths}`);
    // console.log(`Monthly Interest Rate: ${monthlyInterestRate}`);
    // console.log(`Total Compounded Periods: ${totalCompoundedPeriods}`);
    // console.log(`Future Value: ${futureValue}`);

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    this.formattedPrincipal = formatter.format(principal);
    this.formattedMonthlyInvestment = formatter.format(monthlyInvestment);
    this.formattedFutureValue = formatter.format(futureValue);
    // console.log("this.formattedPrincipal",this.formattedPrincipal)
    // console.log("this.formattedMonthlyInvestment",this.formattedMonthlyInvestment)
    // console.log("this.formattedFutureValue",this.formattedFutureValue)
  }

  private _checkValidPage () : void {
    if (window.location.pathname.split('/').length > 2)
      window.location.replace("/practice");
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Investment } from 'src/app/models/practice/Investment.model';
import { ApiService } from '../api/api.service';
import { InvestmentType } from 'src/app/models/practice/InvestmentType.model';

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
    private _apiService: ApiService,
    private route: ActivatedRoute,
  ) {;
    // this._checkValidPage();
    this.investment = new Investment();

  }

  /**
   * Send user to the requested page.
   * @param page
   */
  public async goTo (page: number, id?: number): Promise<void> {
    let route;
    switch (page) {
      case 0:
        route = "/practice";
        break;
      case 1:
        route = "/practice/type";
        break;
      case 2:
        route = `/practice/${id}/investmentInfo`;
        break;
      case 3:
        route = "/practice/type/investmentInfo/result";
        if (this._checkValidityOfFields(this.investment)) {
          // let requestBody = this.investment;
          // console.log(requestBody);
          // let rs = await this._api.post('/practice', requestBody, null);
          // if (rs.getSuccess()) {
          //   console.log("Success", rs.getResponse());
          //   this._snackbarService.openSnackBar(1,"Post curtido!");
          // } else {
          //   console.log("Error", rs.getResponse());
          //   this._snackbarService.openSnackBar(1,rs.getResponse());
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

  /**
   * Get investment types from the api service.
   * @returns 
   */
  public async getInvestmentTypes (): Promise<InvestmentType[]> {

    return await this._apiService.getInvestmentTypes();

  }

  /**
   * Get investment type based on id.
   * @param id 
   */
  public getInvestmentTypeBasedOnId (id: number): Promise<InvestmentType> {

    return this._apiService.getInvestmentTypeBasedOnId(id);

  }

  /**
   * Get id for the page when on simulation info.
   * @returns 
   */
  getIdForThePage (): string {

    return this._getActualPath().split("/")[2];
  }

  /**
   * Get actual path
   * @returns 
   */
  private _getActualPath (): string {
  
    return window.location.pathname;

  }

  /**
   * Check if all the required fields are valid
   * @param investment
   * @returns
   */
  private _checkValidityOfFields (investment: Investment): boolean {
    if (
      this.getRate() &&
      this.getInitialInvestment() &&
      this.getDuration()
    ) { return true; }
    else return false;
  }

  /**
   * Calculate result of the chosen investment.
   * @param investment
   * @returns
   */
  private _calculateResult (investment: Investment): void {

    const principal = +investment.initialInvestment!;
    const monthlyInvestment = +investment.valueInvestedMonthly!;
    const timePeriod = investment.investmentDurationInYears!;
    // console.log(timePeriod);
    if (isNaN(timePeriod) || timePeriod <= 0) {
      console.log('Período de tempo inválido.');
      return;
    }
    let interestRate,compoundedPeriodsPerYear;
    // if (investment.rate == 'cdb') {
    //   interestRate = 6/100;
    //   investment.rate = 'CDB';
    //   compoundedPeriodsPerYear = 12;
    // } else if (investment.rate == 'poupanca') {
    //   interestRate = 4.5/100;
    //   investment.rate = 'Poupança';
    //   compoundedPeriodsPerYear = 12;
    // } else if (investment.rate == 'fundo') {
    //   interestRate = 8/100;
    //   investment.rate = 'Fundo de investimento';
    //   compoundedPeriodsPerYear = 12;
    // }

    const totalMonths = timePeriod;
    const monthlyInterestRate = interestRate / compoundedPeriodsPerYear;
    const totalCompoundedPeriods = compoundedPeriodsPerYear * (timePeriod / 12);
    const futureValue = (principal * (1 + monthlyInterestRate) ** totalCompoundedPeriods) + (monthlyInvestment * (((1 + monthlyInterestRate) ** totalCompoundedPeriods - 1) / monthlyInterestRate));

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    this.formattedPrincipal = formatter.format(principal);
    this.formattedMonthlyInvestment = formatter.format(monthlyInvestment);
    this.formattedFutureValue = formatter.format(futureValue);
  }

  /**
   * Return all page loading from practice page to root path.
   */
  private _checkValidPage () : void {
    let pageUrl = window.location.pathname.split('/');
    if (pageUrl[1] == 'practice' && pageUrl.length > 3){
      window.location.replace("/practice");
    }
  }
  

  public setRate (rate: string): void {
    // this.investment.rate = rate;
  }
  public getRate (): string | null {
    // return this.investment.rate;
    return null;
  }

  public setInitialInvestment (initial_investment: number): void {
    this.investment.initialInvestment = initial_investment;
  }
  public getInitialInvestment (): number | null {
    return this.investment.initialInvestment;
  }

  public setDuration (duration: number): void {
    this.investment.investmentDurationInYears = duration;
  }
  public getDuration (): number | null {
    return this.investment.investmentDurationInYears;
  }

  public setMonthlyInvestment (monthly_investment: number): void {
    this.investment.valueInvestedMonthly = monthly_investment;
  }
  public getMonthlyInvestment (): number | null {
    return this.investment.valueInvestedMonthly;
  }
}

export class Investment {
  id: number | null;
  idInvestmentType: number | null;
  initialInvestment: number | null;
  investmentDurationInYears: number | null;
  valueInvestedMonthly: number | null;

  constructor (investment?: Investment) {

    this.id = investment?.id || null;
    this.idInvestmentType = investment?.idInvestmentType || null;
    this.initialInvestment = investment?.initialInvestment || null;
    this.investmentDurationInYears = investment?.investmentDurationInYears || null;
    this.valueInvestedMonthly = investment?.valueInvestedMonthly || null;
    
  }

}

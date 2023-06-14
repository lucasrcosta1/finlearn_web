export class InvestType {
  name        : string;
  value       : string;
  interestRate: string;

  constructor (investType?: InvestType) {
    this.name         = investType?.name         || '';
    this.value        = investType?.value        || '';
    this.interestRate = investType?.interestRate || '';
  }
}

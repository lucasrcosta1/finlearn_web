export class InvestType {
  id          : number | null;
  name        : string | null;
  redemptionPeriod   : string | null;
  interestRate: number | null;

  constructor (investType?: InvestType) {
    this.id           = investType?.id           || null;
    this.name         = investType?.name         || null;
    this.redemptionPeriod    = investType?.redemptionPeriod    || null;
    this.interestRate = investType?.interestRate || null;
  }
}

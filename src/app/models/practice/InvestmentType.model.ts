export class InvestmentType {
  id                      : number | null;
  name                    : string | null;
  investmentLogoPath      : string | null;
  redemptionPeriodInYears : number | null;
  interestRate            : number | null;
  clicked                 : boolean;

  constructor (InvestmentType?: InvestmentType) {
    this.id                     = InvestmentType?.id                      || null;
    this.name                   = InvestmentType?.name                    || null;
    this.investmentLogoPath     = InvestmentType?.investmentLogoPath      || null;
    this.redemptionPeriodInYears= InvestmentType?.redemptionPeriodInYears || null;
    this.interestRate           = InvestmentType?.interestRate            || null;
    this.clicked                = InvestmentType?.clicked                 || false;
  }
}

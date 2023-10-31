export class Investment {
  public rate?: string;
  public initial_investment?: number;
  public duration?: number;
  public monthly_investment?: number;

  constructor (investment?: Investment) {
    this.rate = investment?.rate;
    this.initial_investment = investment?.initial_investment;
    this.duration = investment?.duration;
    this.monthly_investment = investment?.monthly_investment;
  }

}

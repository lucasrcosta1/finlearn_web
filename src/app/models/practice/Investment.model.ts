export class Investment {
  id: number | null;
  rate: string | null;
  initial_investment: number | null;
  duration: number | null;
  monthly_investment: number | null;

  constructor (investment?: Investment) {
    this.id = investment?.id || null;
    this.rate = investment?.rate || null;
    this.initial_investment = investment?.initial_investment || null;
    this.duration = investment?.duration || null;
    this.monthly_investment = investment?.monthly_investment || null;
  }

}

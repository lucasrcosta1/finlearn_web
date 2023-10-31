import { Component } from '@angular/core';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-secondary-practice',
  templateUrl: './secondary-practice.component.html',
  styleUrls: ['./secondary-practice.component.css']
})
export class SecondaryPracticeComponent {

  image = "/assets/images/pratique/bro.svg";

  constructor (
    private _pratiqueService: PratiqueService,
  ) {}

  ngOnInit (): void {}

  /**
   * Send user to the requested page.
   * @param page
   */
  public goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }

}

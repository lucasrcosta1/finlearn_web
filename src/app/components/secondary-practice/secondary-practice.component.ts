import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-secondary-practice',
  templateUrl: './secondary-practice.component.html',
  styleUrls: ['./secondary-practice.component.css']
})
export class SecondaryPracticeComponent {

  constructor (
    private _pratiqueService: PratiqueService,
  ) {}

  /**
   * Send user to the requested page.
   * @param page
   */
  public goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }

}

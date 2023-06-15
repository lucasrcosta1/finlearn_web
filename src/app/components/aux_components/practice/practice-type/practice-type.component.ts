import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PratiqueService } from 'src/app/service/pratique/pratique.service';

@Component({
  selector: 'app-practice-type',
  templateUrl: './practice-type.component.html',
  styleUrls: ['./practice-type.component.css']
})
export class PracticeTypeComponent {

  constructor (
    private _pratiqueService: PratiqueService,
  ) {}

  public goTo (page: number): void {
    this._pratiqueService.goTo(page);
  }
  
}


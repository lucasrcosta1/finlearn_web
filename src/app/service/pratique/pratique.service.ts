import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PratiqueService {

  constructor(
    private _router: Router,
  ) { }

  public goTo (page: number): void {
    let route;
    switch (page) {
      case 0:
        route = "/practice";
        break;
      case 1:
        route = "/practice/type";
        break;
      case 2:
        route = "/practice/type/investmentInfo";
        break;
      case 3:
        route = "/practice/type/investmentInfo/result";
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
}

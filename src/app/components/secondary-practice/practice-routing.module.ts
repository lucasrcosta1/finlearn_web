import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeTypeComponent } from '../aux_components/practice/practice-type/practice-type.component';
import { PracticeInvestmentInfoComponent } from '../aux_components/practice/practice-investment-info/practice-investment-info.component';
import { PracticeResultComponent } from '../aux_components/practice/practice-result/practice-result.component';

const routes: Routes = [
  { path: 'practice/type', component: PracticeTypeComponent },
  { path: 'practice/type/investmentInfo', component: PracticeInvestmentInfoComponent },
  { path: 'practice/type/investmentInfo/result', component: PracticeResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }

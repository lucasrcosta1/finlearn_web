import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleComponent } from '../aux_components/topic/module/module.component';

const routes: Routes = [
  { path: 'topic/:id', component: ModuleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleComponent } from '../aux_components/topic/module/module.component';
import { ClassComponent } from '../aux_components/class/class.component';

const routes: Routes = [
  { path: 'learn/:id', component: ModuleComponent },
  { path: 'learn/:id/:class', component: ClassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }

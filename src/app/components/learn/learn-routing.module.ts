import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicComponent } from '../aux_components/topic/topic.component';
import { LectureComponent } from '../aux_components/lecture/lecture.component';

const routes: Routes = [
  { path: 'learn/:id', component: TopicComponent },
  { path: 'learn/:id/:moduleId/:lectureId', component: LectureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }

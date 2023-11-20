import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityCreatePostComponent } from '../aux_components/community/community-create-post/community-create-post.component';

const routes: Routes = [
  { path: 'community/create-post', component: CommunityCreatePostComponent},
  //{ path: 'community/:id', component: CommunityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }

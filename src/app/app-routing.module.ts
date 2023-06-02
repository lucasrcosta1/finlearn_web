import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnRoutingModule } from './components/learn/learn-routing.module';

import { AuthGuard } from './components/guards/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { SuporteComponent } from './components/suporte/suporte.component';
import { CommunityComponent } from './components/community/community.component';
import { PracticeComponent } from './components/practice/practice.component';
import { SimpleLoginComponent } from './components/authentication/simple-login/simple-login.component';
import { SimpleAuthComponent } from './components/authentication/simple-auth/simple-auth.component';
import { LearnComponent } from './components/learn/learn.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'learn', component: LearnComponent, canActivate: [AuthGuard]},
  {path: 'support', component: SuporteComponent, canActivate: [AuthGuard]},
  {path: 'community', component: CommunityComponent, canActivate: [AuthGuard]},
  {path: 'practice', component: PracticeComponent, canActivate: [AuthGuard]},
  {path: 'auth/login', component: SimpleAuthComponent},
  {path: '**', redirectTo: 'home'}, // create a not found page.

];

@NgModule({
  imports: [RouterModule.forRoot(routes), LearnRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

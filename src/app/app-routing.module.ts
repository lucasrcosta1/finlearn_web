import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth-guard.service';
import { HomeComponent } from './components/home/home.component';


import { SuporteComponent } from './components/suporte/suporte.component';
import { CommunityComponent } from './components/community/community.component';
import { PracticeComponent } from './components/practice/practice.component';

import { SimpleLoginComponent } from './components/authentication/simple-login/simple-login.component';
import { SimpleAuthComponent } from './components/authentication/simple-auth/simple-auth.component';
import { LearnComponent } from './components/learn/learn.component';


const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  // { path: '**', redirectTo: 'home'}, // create a not found page.

  //test new login
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'learn', component: LearnComponent, canActivate: [AuthGuard]},
  {path: 'support', component: SuporteComponent, canActivate: [AuthGuard]},
  {path: 'community', component: CommunityComponent, canActivate: [AuthGuard]},
  {path: 'practice', component: PracticeComponent, canActivate: [AuthGuard]},
  {path: 'authenticate/simple-auth', component: SimpleAuthComponent},
  {path: '**', redirectTo: 'authenticate/simple-auth'}, // create a not found page.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

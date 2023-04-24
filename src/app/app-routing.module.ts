import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth-guard.service';
import { HomeComponent } from './components/home/home.component';


import { SuporteComponent } from './components/suporte/suporte.component';
import { CommunityComponent } from './components/community/community.component';

import { SimpleLoginComponent } from './components/simple/authenticate/simple-login/simple-login.component';
import { SimpleAuthComponent } from './components/simple/authenticate/simple-auth/simple-auth.component';
import { LearnComponent } from './components/learn/learn.component';


const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  // { path: '**', redirectTo: 'home'}, // create a not found page.

  //test new login
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'learn', component: LearnComponent, canActivate: [AuthGuard]},
  {path: 'support', component: SuporteComponent, canActivate: [AuthGuard]},
  {path: 'community', component: CommunityComponent, canActivate: [AuthGuard]},
  {path: 'authenticate/simple-auth', component: SimpleAuthComponent},
  {path: '**', redirectTo: 'home'}, // create a not found page.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

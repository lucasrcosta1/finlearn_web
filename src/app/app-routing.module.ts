import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnRoutingModule } from './components/learn/learn-routing.module';

import { AuthGuard } from './components/authentication/guards/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { SuporteComponent } from './components/suporte/suporte.component';
import { CommunityComponent } from './components/community/community.component';
import { LearnComponent } from './components/learn/learn.component';
import { RouteTestComponent } from './components/route-test/route-test.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PracticeRoutingModule } from './components/secondary-practice/practice-routing.module';
import { SecondaryPracticeComponent } from './components/secondary-practice/secondary-practice.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';



const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'page_not_found', component: PageNotFoundComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'learn', component: LearnComponent, canActivate: [AuthGuard]},
  {path: 'support', component: SuporteComponent, canActivate: [AuthGuard]},
  {path: 'community', component: CommunityComponent, canActivate: [AuthGuard]},
  {path: 'practice', component: SecondaryPracticeComponent, canActivate: [AuthGuard]},
  {path: 'route_test', component: RouteTestComponent, canActivate: [AuthGuard]},
  {path: 'auth/login', component: AuthenticationComponent},
  {path: '**', redirectTo: 'page_not_found'}, // create a not found page.

];

@NgModule({
  imports: [RouterModule.forRoot(routes), LearnRoutingModule, PracticeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

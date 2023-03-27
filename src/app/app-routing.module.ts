import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth-guard.service';
import { HomeComponent } from './components/home/home.component';


import { SuporteComponent } from './components/suporte/suporte.component';

import { LoginComponent } from './components/login_page/login/login.component';
import { RegisterComponent } from './components/login_page/register/register.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},

  {path: 'support', component: SuporteComponent, canActivate: [AuthGuard]},

  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: 'home'}, // create a not found page.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

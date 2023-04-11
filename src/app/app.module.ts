import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login_page/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SuporteComponent } from './components/suporte/suporte.component';
import { RegisterComponent } from './components/login_page/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { OutsideLoginComponent } from './components/login_page/outside-login/outside-login.component';
import { SimpleRegisterComponent } from './components/simple/authenticate/simple-register/simple-register.component';
import { SimpleLoginComponent } from './components/simple/authenticate/simple-login/simple-login.component';
import { SimpleAuthComponent } from './components/simple/authenticate/simple-auth/simple-auth.component';
import { SimpleAuthBgComponent } from './components/simple/authenticate/simple-auth-bg/simple-auth-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    SuporteComponent,
    RegisterComponent,
    FooterComponent,
    OutsideLoginComponent,
    SimpleRegisterComponent,
    SimpleLoginComponent,
    SimpleAuthComponent,
    SimpleAuthBgComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

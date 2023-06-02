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
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SuporteComponent } from './components/suporte/suporte.component';
import { CommunityComponent } from './components/community/community.component';
import { SimpleRegisterComponent } from './components/authentication/simple-register/simple-register.component';
import { SimpleLoginComponent } from './components/authentication/simple-login/simple-login.component';
import { SimpleAuthComponent } from './components/authentication/simple-auth/simple-auth.component';
import { SimpleAuthBgComponent } from './components/authentication/simple-auth-bg/simple-auth-bg.component';
import { PracticeComponent } from './components/practice/practice.component';
import { LearnComponent } from './components/learn/learn.component';
import { ProgressBarComponent } from './components/aux_components/progress-bar/progress-bar/progress-bar.component';
import { ClassModuleComponent } from './components/aux_components/class-module/class-module/class-module.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyConversationsComponent } from './components/aux_components/my-conversations/my-conversations..component';
import { BtnPlusInputComponent } from './components/aux_components/btn-plus-input/btn-plus-input.component';
import { DropdownComponent } from './components/aux_components/dropdown/dropdown.component';
import { ModuleComponent } from './components/aux_components/topic/module/module.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SuporteComponent,
    SimpleRegisterComponent,
    SimpleLoginComponent,
    SimpleAuthComponent,
    SimpleAuthBgComponent,
    CommunityComponent,
    PracticeComponent,
    LearnComponent,
    ProgressBarComponent,
    ClassModuleComponent,
    SidebarComponent,
    MyConversationsComponent,
    BtnPlusInputComponent,
    DropdownComponent,
    ModuleComponent,
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
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    NgbModule,
    MatExpansionModule,
    MatStepperModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from "ng2-currency-mask";

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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyConversationsComponent } from './components/aux_components/my-conversations/my-conversations..component';
import { BtnPlusInputComponent } from './components/aux_components/btn-plus-input/btn-plus-input.component';
import { DropdownComponent } from './components/aux_components/dropdown/dropdown.component';
import { ModuleComponent } from './components/aux_components/topic/module/module.component';
import { RouteTestComponent } from './components/route-test/route-test.component';
import { ClassComponent } from './components/aux_components/class/class.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AllConversationsComponent } from './components/aux_components/all-conversations/all-conversations.component';
import { LoadingComponent } from './components/aux_components/loading/loading.component';
import { SecondaryPracticeComponent } from './components/secondary-practice/secondary-practice.component';
import { PracticeTypeComponent } from './components/aux_components/practice/practice-type/practice-type.component';
import { PracticeInvestmentInfoComponent } from './components/aux_components/practice/practice-investment-info/practice-investment-info.component';
import { PracticeResultComponent } from './components/aux_components/practice/practice-result/practice-result.component';
import { ModuleDescriptionComponent } from './components/aux_components/topic/module/module-description/module-description.component';
import { ModuleStatsComponent } from './components/aux_components/topic/module/module-stats/module-stats.component';


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
    SidebarComponent,
    MyConversationsComponent,
    BtnPlusInputComponent,
    DropdownComponent,
    ModuleComponent,
    RouteTestComponent,
    ClassComponent,
    PageNotFoundComponent,
    AllConversationsComponent,
    LoadingComponent,
    SecondaryPracticeComponent,
    PracticeTypeComponent,
    PracticeInvestmentInfoComponent,
    PracticeResultComponent,
    ModuleDescriptionComponent,
    ModuleStatsComponent,
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
    MatSnackBarModule,
    CurrencyMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

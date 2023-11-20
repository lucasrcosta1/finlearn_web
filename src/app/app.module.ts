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
import { SuporteComponent } from './components/suporte/suporte.component';
import { CommunityComponent } from './components/community/community.component';
import { LearnComponent } from './components/learn/learn.component';
import { ProgressBarComponent } from './components/aux_components/progress-bar/progress-bar/progress-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DropdownComponent } from './components/aux_components/dropdown/dropdown.component';

import { RouteTestComponent } from './components/route-test/route-test.component';
import { LectureComponent } from './components/aux_components/lecture/lecture.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingComponent } from './components/aux_components/loading/loading.component';
import { PracticeComponent } from './components/practice/practice.component';
import { PracticeTypeComponent } from './components/aux_components/practice/practice-type/practice-type.component';
import { PracticeInvestmentInfoComponent } from './components/aux_components/practice/practice-investment-info/practice-investment-info.component';
import { PracticeResultComponent } from './components/aux_components/practice/practice-result/practice-result.component';
import { TopicDescriptionComponent } from './components/aux_components/topic/topic-description/topic-description.component';
import { TopicComponent } from './components/aux_components/topic/topic.component';
import { TopicStatsComponent } from './components/aux_components/topic/topic-stats/topic-stats.component';
import { ModuleAccordeonComponent } from './components/aux_components/topic/module-accordeon/module-accordeon.component';
import { LectureCardComponent } from './components/aux_components/topic/lecture-card/lecture-card.component';
import { DurationFormatPipe } from './models/pipe/DurationFormatPipe.model';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginSmallerScreenComponent } from './components/authentication/login/login-smaller-screen/login-smaller-screen.component';
import { LoginBiggerScreenComponent } from './components/authentication/login/login-bigger-screen/login-bigger-screen.component';
import { RegisterBiggerScreenComponent } from './components/authentication/register/register-bigger-screen/register-bigger-screen.component';
import { RegisterSmallerScreenComponent } from './components/authentication/register/register-smaller-screen/register-smaller-screen.component';
import { LoginThroughComponent } from './components/aux_components/authentication/login-through/login-through.component';
import { LineComponent } from './components/aux_components/authentication/login-through/line/line.component';
import { ContactComponent } from './components/suporte/contact/contact.component';
import { FrequentQuestionsComponent } from './components/suporte/frequent-questions/frequent-questions.component';
import { DropdownQuestionComponent } from './components/aux_components/contact/frequent-questions/dropdown-question/dropdown-question.component';
import { CommunityHeaderComponent } from './components/aux_components/community/community-header/community-header.component';
import { CommunityInputComponent } from './components/aux_components/community/community-input/community-input.component';
import { CommunityCreatePostComponent } from './components/aux_components/community/community-create-post/community-create-post.component';
import { CommunityPostInformationComponent } from './components/aux_components/community/community-post-information/community-post-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuporteComponent,
    CommunityComponent,
    LearnComponent,
    ProgressBarComponent,
    SidebarComponent,
    DropdownComponent,
    RouteTestComponent,
    LectureComponent,
    PageNotFoundComponent,
    LoadingComponent,
    PracticeComponent,
    PracticeTypeComponent,
    PracticeInvestmentInfoComponent,
    PracticeResultComponent,
    TopicDescriptionComponent, 
    TopicComponent, 
    TopicStatsComponent,
    ModuleAccordeonComponent, 
    LectureCardComponent,
    DurationFormatPipe,
    AuthenticationComponent,
    LoginSmallerScreenComponent,
    LoginBiggerScreenComponent,
    RegisterBiggerScreenComponent,
    RegisterSmallerScreenComponent,
    LoginThroughComponent,
    LineComponent,
    ContactComponent,
    FrequentQuestionsComponent,
    DropdownQuestionComponent,
    CommunityHeaderComponent,
    CommunityInputComponent,
    CommunityCreatePostComponent,
    CommunityPostInformationComponent,
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

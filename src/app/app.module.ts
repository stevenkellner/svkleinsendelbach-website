import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { FootballAdultsSecondTeamContactComponent } from './pages/football-adults/second-team/contact/contact.component';
import { FootballAdultsSecondTeamResultsComponent } from './pages/football-adults/second-team/results/results.component';
import { FootballAdultsFirstTeamContactComponent } from './pages/football-adults/first-team/contact/contact.component';
import { FootballAdultsFirstTeamResultsComponent } from './pages/football-adults/first-team/results/results.component';
import { FootballAdultsSecondTeamSquadComponent } from './pages/football-adults/second-team/squad/squad.component';
import { FootballAdultsSecondTeamTimesComponent } from './pages/football-adults/second-team/times/times.component';
import { FootballAdultsFirstTeamSquadComponent } from './pages/football-adults/first-team/squad/squad.component';
import { FootballAdultsFirstTeamTimesComponent } from './pages/football-adults/first-team/times/times.component';
import { FootballAdultsAhTeamContactComponent } from './pages/football-adults/ah-team/contact/contact.component';
import { FootballAdultsAhTeamSquadComponent } from './pages/football-adults/ah-team/squad/squad.component';
import { FootballAdultsAhTeamTimesComponent } from './pages/football-adults/ah-team/times/times.component';
import { FootballAYouthCResultsComponent } from './pages/football-youth/youth-c/results/results.component';
import { FootballAYouthEResultsComponent } from './pages/football-youth/youth-e/results/results.component';
import { FootballYouthCContactComponent } from './pages/football-youth/youth-c/contact/contact.component';
import { FootballYouthEContactComponent } from './pages/football-youth/youth-e/contact/contact.component';
import { FootballYouthFContactComponent } from './pages/football-youth/youth-f/contact/contact.component';
import { FootballYouthGContactComponent } from './pages/football-youth/youth-g/contact/contact.component';
import { NavBarItemComponent } from './_template/header/nav-bar/nav-bar-item/nav-bar-item.component';
import { FootballAdultsLeftRowComponent } from './pages/football-adults/left-row/left-row.component';
import { FootballYouthCTimesComponent } from './pages/football-youth/youth-c/times/times.component';
import { FootballYouthCSquadComponent } from './pages/football-youth/youth-c/squad/squad.component';
import { FootballYouthETimesComponent } from './pages/football-youth/youth-e/times/times.component';
import { FootballYouthESquadComponent } from './pages/football-youth/youth-e/squad/squad.component';
import { FootballYouthFTimesComponent } from './pages/football-youth/youth-f/times/times.component';
import { FootballYouthFSquadComponent } from './pages/football-youth/youth-f/squad/squad.component';
import { FootballYouthGTimesComponent } from './pages/football-youth/youth-g/times/times.component';
import { FootballYouthGSquadComponent } from './pages/football-youth/youth-g/squad/squad.component';
import { FootballAdultsGeneralComponent } from './pages/football-adults/general/general.component';
import { FootballYouthLeftRowComponent } from './pages/football-youth/left-row/left-row.component';
import { FootballYouthGeneralComponent } from './pages/football-youth/general/general.component';
import { GymnasticsLeftRowComponent } from './pages/gymnastics/left-row/left-row.component';
import { SportsHomeComponent } from './pages/about-us/sports-home/sports-home.component';
import { TopHeaderComponent } from './_template/header/top-header/top-header.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutUsLeftRowComponent } from './pages/about-us/left-row/left-row.component';
import { ChronicleComponent } from './pages/about-us/chronicle/chronicle.component';
import { ManagersComponent } from './pages/about-us/managers/managers.component';
import { HomeLeftRowComponent } from './pages/home/left-row/left-row.component';
import { NavBarComponent } from './_template/header/nav-bar/nav-bar.component';
import { StatuteComponent } from './pages/about-us/statute/statute.component';
import { PrivacyComponent } from './pages/about-us/privacy/privacy.component';
import { RequestComponent } from './pages/about-us/request/request.component';
import { GymnasticsComponent } from './pages/gymnastics/gymnastics.component';
import { LeftRowComponent } from './_template/left-row/left-row.component';
import { HeaderComponent } from './_template/header/header.component';
import { FooterComponent } from './_template/footer/footer.component';
import { DancingComponent } from './pages/dancing/dancing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WaveComponent } from './_template/wave/wave.component';
import { DriveComponent } from './pages/drive/drive.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    FootballAdultsSecondTeamContactComponent,
    FootballAdultsSecondTeamResultsComponent,
    FootballAdultsFirstTeamContactComponent,
    FootballAdultsFirstTeamResultsComponent,
    FootballAdultsSecondTeamSquadComponent,
    FootballAdultsSecondTeamTimesComponent,
    FootballAdultsFirstTeamSquadComponent,
    FootballAdultsFirstTeamTimesComponent,
    FootballAdultsAhTeamContactComponent,
    FootballAdultsAhTeamSquadComponent,
    FootballAdultsAhTeamTimesComponent,
    FootballAYouthCResultsComponent,
    FootballAYouthEResultsComponent,
    FootballAdultsGeneralComponent,
    FootballAdultsLeftRowComponent,
    FootballAdultsGeneralComponent,
    FootballYouthCContactComponent,
    FootballYouthEContactComponent,
    FootballYouthFContactComponent,
    FootballYouthGContactComponent,
    FootballYouthLeftRowComponent,
    FootballYouthGeneralComponent,
    FootballYouthCTimesComponent,
    FootballYouthCSquadComponent,
    FootballYouthETimesComponent,
    FootballYouthESquadComponent,
    FootballYouthFTimesComponent,
    FootballYouthFSquadComponent,
    FootballYouthGTimesComponent,
    FootballYouthGSquadComponent,
    GymnasticsLeftRowComponent,
    AboutUsLeftRowComponent,
    PageNotFoundComponent,
    HomeLeftRowComponent,
    SportsHomeComponent,
    NavBarItemComponent,
    GymnasticsComponent,
    ChronicleComponent,
    TopHeaderComponent,
    ManagersComponent,
    StatuteComponent,
    PrivacyComponent,
    RequestComponent,
    LeftRowComponent,
    DancingComponent,
    ContactComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    DriveComponent,
    WaveComponent,
    HomeComponent,
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserModule,
    RecaptchaModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

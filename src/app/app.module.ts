import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
import { FootballAdultsLeftRowComponent } from './pages/football-adults/left-row/left-row.component';
import { FootballAdultsGeneralComponent } from './pages/football-adults/general/general.component';
import { AboutUsLeftRowComponent } from './pages/about-us/left-row/left-row.component';
import { HomeLeftRowComponent } from './pages/home/left-row/left-row.component';
import { SportsHomeComponent } from './pages/about-us/sports-home/sports-home.component';
import { ChronicleComponent } from './pages/about-us/chronicle/chronicle.component';
import { ManagersComponent } from './pages/about-us/managers/managers.component';
import { NavBarComponent } from './_template/header/nav-bar/nav-bar.component';
import { StatuteComponent } from './pages/about-us/statute/statute.component';
import { PrivacyComponent } from './pages/about-us/privacy/privacy.component';
import { RequestComponent } from './pages/about-us/request/request.component';
import { LeftRowComponent } from './_template/left-row/left-row.component';
import { HeaderComponent } from './_template/header/header.component';
import { FooterComponent } from './_template/footer/footer.component';
import { WaveComponent } from './_template/wave/wave.component';
import { HomeComponent } from './pages/home/home.component';
import { TopHeaderComponent } from './_template/header/top-header/top-header.component';
import { NavBarItemComponent } from './_template/header/nav-bar/nav-bar-item/nav-bar-item.component';
import { FootballAdultsFirstTeamContactComponent } from './pages/football-adults/first-team/contact/contact.component';
import { FootballAdultsFirstTeamSquadComponent } from './pages/football-adults/first-team/squad/squad.component';
import { FootballAdultsFirstTeamTimesComponent } from './pages/football-adults/first-team/times/times.component';
import { FootballAdultsFirstTeamResultsComponent } from './pages/football-adults/first-team/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    WaveComponent,
    LeftRowComponent,
    HomeComponent,
    HomeLeftRowComponent,
    ManagersComponent,
    AboutUsLeftRowComponent,
    SportsHomeComponent,
    ChronicleComponent,
    StatuteComponent,
    PrivacyComponent,
    RequestComponent,
    FootballAdultsGeneralComponent,
    FootballAdultsLeftRowComponent,
    FootballAdultsGeneralComponent,
    TopHeaderComponent,
    NavBarItemComponent,
    FootballAdultsFirstTeamSquadComponent,
    FootballAdultsFirstTeamTimesComponent,
    FootballAdultsFirstTeamContactComponent,
    FootballAdultsFirstTeamResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

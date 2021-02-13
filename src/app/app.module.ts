import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
import { FootballAdultsLeftRowComponent } from './pages/football-adults/football-adults-left-row/football-adults-left-row.component';
import { FootballAdultsGeneralComponent } from './pages/football-adults/football-adults-general/football-adults-general.component';
import { AboutUsLeftRowComponent } from './pages/about-us/about-us-left-row/about-us-left-row.component';
import { HomeLeftRowComponent } from './pages/home/home-left-row/home-left-row.component';
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
    NavBarItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

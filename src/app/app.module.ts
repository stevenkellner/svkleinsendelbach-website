import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './_template/header/header.component';
import { NavBarComponent } from './_template/header/nav-bar/nav-bar.component';
import { FooterComponent } from './_template/footer/footer.component';
import { WaveComponent } from './_template/wave/wave.component';
import { LeftRowComponent } from './_template/left-row/left-row.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeLeftRowComponent } from './pages/home/home-left-row/home-left-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    WaveComponent,
    LeftRowComponent,
    HomeComponent,
    HomeLeftRowComponent
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

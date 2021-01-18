import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_template/header/header.component';
import { NavBarComponent } from './_template/header/nav-bar/nav-bar.component';
import { FooterComponent } from './_template/footer/footer.component';
import { WaveComponent } from './_template/wave/wave.component';
import { LeftRowComponent } from './_template/left-row/left-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    WaveComponent,
    LeftRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

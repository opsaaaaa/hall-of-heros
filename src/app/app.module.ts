import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinksComponent } from './nav-bar/nav-links/nav-links.component';
import { HallComponent } from './hall/hall.component';
import { DashComponent } from './dash/dash.component';
import { HeroComponent } from './hero/hero.component';
import { NewComponent } from './hero/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavLinksComponent,
    HallComponent,
    DashComponent,
    HeroComponent,
    NewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

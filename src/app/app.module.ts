import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinksComponent } from './nav-bar/nav-links/nav-links.component';
import { HallComponent } from './hall/hall.component';
import { DashComponent } from './dash/dash.component';
import { HeroComponent } from './hero/hero.component';
import { NewComponent } from './hero/new/new.component';
import { ShowComponent } from './hero/show/show.component';
import { ListComponent } from './hero/list/list.component';
import { EditComponent } from './hero/edit/edit.component';
import { PageTitleComponent } from './nav-bar/page-title/page-title.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { BackComponent } from './back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavLinksComponent,
    HallComponent,
    DashComponent,
    HeroComponent,
    NewComponent,
    ShowComponent,
    ListComponent,
    EditComponent,
    PageTitleComponent,
    MessageComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

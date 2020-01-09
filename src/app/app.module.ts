import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HallComponent },
      { path: 'hall', component: HallComponent },
      { path: 'dash', component: DashComponent },
      { path: 'hero', component: HeroComponent },
      { path: 'hero/:id', component: HeroComponent },
      { path: 'hero/new', component: NewComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

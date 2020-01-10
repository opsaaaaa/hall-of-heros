import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HallComponent } from './hall/hall.component';
import { DashComponent } from './dash/dash.component';
import { NewComponent } from './hero/new/new.component';
import { ShowComponent } from './hero/show/show.component';
import { ListComponent } from './hero/list/list.component';
import { EditComponent } from './hero/edit/edit.component';
import { PageTitleComponent } from './nav-bar/page-title/page-title.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', component: HallComponent },
  { path: 'hall', component: HallComponent },
  { path: 'dash', component: DashComponent },
  { path: 'heroes', component: HeroComponent },
  { path: 'hero/:id', component: ShowComponent },
  { path: 'hero/:id/edit', component: EditComponent },
  { path: 'hero/new', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

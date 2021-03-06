import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {EventsComponent} from './views/events/events.component';
import {MembersComponent} from './views/members/members.component';
import {PicturesComponent} from './views/pictures/pictures.component';
import {ServicesComponent} from './views/services/services.component';
import {HomeworkComponent} from './views/homework/homework.component';
import {TextbooksComponent} from './views/textbooks/textbooks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'pictures',
    component: PicturesComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'homework',
    component: HomeworkComponent,
  },
  {
    path: 'textbooks',
    component: TextbooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

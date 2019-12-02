import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './views/home/home.component';
import {MembersComponent} from './views/members/members.component';
import {ServicesComponent} from './views/services/services.component';
import {EventsComponent} from './views/events/events.component';
import {PicturesComponent} from './views/pictures/pictures.component';
import {BackendService} from './services/backend.service';
import {HttpClientModule} from '@angular/common/http';
import {CalendarEventComponent} from './components/calendar-event/calendar-event.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TweetDate} from './pipes/tweet-date.pipe';
import {EventDatePipe} from './pipes/event-date.pipe';
import {NtkmeButtonModule} from '@ctrl/ngx-github-buttons';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {TweetTextPipe} from './pipes/tweet-text.pipe';
import {EventGroupDatePipe} from './pipes/event-group-date.pipe';
import {IImageLoaderOptions, NgxProgressiveImageLoaderModule} from 'ngx-progressive-image-loader';
import { HomeworkComponent } from './views/homework/homework.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import { HomeworkEntryComponent } from './components/homework-entry/homework-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    ServicesComponent,
    EventsComponent,
    PicturesComponent,
    CalendarEventComponent,
    TweetDate,
    EventDatePipe,
    TweetTextPipe,
    EventGroupDatePipe,
    HomeworkComponent,
    FilterPipe,
    HomeworkEntryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
    }),
    NgxProgressiveImageLoaderModule.forRoot({
      rootMargin: '0px',
      threshold: 0.1,
      filter: 'blur(3px)',
      imageRatio: 16 / 9,
      placeholderImageSrc: '/assets/images/placeholder.png'
    } as IImageLoaderOptions),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NtkmeButtonModule,
    FormsModule
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

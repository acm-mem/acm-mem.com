import {Component, Input, OnInit} from '@angular/core';
import {CalendarEvent} from '../../models/event.model';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss']
})
export class CalendarEventComponent implements OnInit {
  @Input()
  event: CalendarEvent;

  constructor() {
    console.log('event:', this.event);
  }

  ngOnInit() {
  }

}

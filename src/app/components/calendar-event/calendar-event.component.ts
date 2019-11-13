import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../models/event.model';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss']
})
export class CalendarEventComponent implements OnInit {
  @Input()
  event: Event;

  constructor() { }

  ngOnInit() {
  }

}

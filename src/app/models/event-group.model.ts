import {CalendarEvent} from './event.model';

export class EventGroup {
  events: CalendarEvent[];
  date: Date;

  constructor(events: CalendarEvent[], date: Date) {
    this.events = events;
    this.date = date;
  }
}

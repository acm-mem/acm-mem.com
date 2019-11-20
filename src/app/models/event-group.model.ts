import {Event} from './event.model';

export class EventGroup {
  events: Event[];
  date: Date;

  constructor(events: Event[], date: Date) {
    this.events = events;
    this.date = date;
  }
}

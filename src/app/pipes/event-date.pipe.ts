import { Pipe, PipeTransform } from '@angular/core';
import {CalendarEvent} from '../models/event.model';

@Pipe({
  name: 'eventDate'
})
export class EventDatePipe implements PipeTransform {

  transform(event: CalendarEvent): string {
    console.log('Transforming event:', event);
    const localeOptions = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
    const localeStartDate =  event.startDate.toLocaleDateString('en-US', localeOptions);
    const localeEndDate =  event.endDate.toLocaleDateString('en-US', localeOptions);

    return `${localeStartDate} - ${localeEndDate}`;
  }
}

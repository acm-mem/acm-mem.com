import { Pipe, PipeTransform } from '@angular/core';
import {CalendarEvent} from '../models/event.model';

@Pipe({
  name: 'eventDate'
})
export class EventDatePipe implements PipeTransform {

  transform(event: CalendarEvent): string {
    const localeStartDate =  event.startDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');
    const localeEndDate =  event.endDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');

    return `${localeStartDate} - ${localeEndDate}`;
  }
}

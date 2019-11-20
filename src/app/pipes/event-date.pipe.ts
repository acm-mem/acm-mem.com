import { Pipe, PipeTransform } from '@angular/core';
import {Event} from '../models/event.model';

@Pipe({
  name: 'eventDate'
})
export class EventDatePipe implements PipeTransform {

  transform(event: Event): string {
    let transformedString = '';
    if (event.isAllDay) {
      const localeOptions = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
      const localeStartDate =  event.startDate.toLocaleDateString('en-US', localeOptions);
      const localeEndDate =  event.endDate.toLocaleDateString('en-US', localeOptions);
      transformedString = `${localeStartDate} - ${localeEndDate}`;
    } else {
      transformedString = 'yes';
    }


    return transformedString;
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'eventGroupDate'
})
export class EventGroupDatePipe implements PipeTransform {
  transform(date: Date): string {
    const localeOptions = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
    return date.toLocaleDateString('en-US', localeOptions);
  }
}

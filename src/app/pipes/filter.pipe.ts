import {Pipe, PipeTransform} from '@angular/core';
import {Homework} from '../models/homework.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Homework[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText) || it.professor.toLowerCase().includes(searchText)
      || it.semester.toLowerCase().includes(searchText) || it.url.toLowerCase().includes(searchText);
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetDate'
})
export class TweetDate implements PipeTransform {

  transform(value: string): string {
    return new Date(value).toLocaleDateString('en-US');
  }

}

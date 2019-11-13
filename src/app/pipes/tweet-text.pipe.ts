import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetText'
})
export class TweetTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  }
}

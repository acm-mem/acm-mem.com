import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Quote} from '../models/quotes/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(protected httpClient: HttpClient) {
  }

  getRandomQuote(): Observable<Quote> {
    return this.httpClient.get('https://programming-quotes-api.herokuapp.com/quotes/random').pipe(
      map(res => {
        const quote = new Quote();
        console.log('res', res);
        quote.deserialize(res);
        console.log('quote', quote);
        return quote;
      })
    );
  }
}

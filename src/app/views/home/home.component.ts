import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {Tweet} from '../../models/tweet.model';
import {BackendService} from '../../services/backend.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {QuotesService} from '../../services/quotes.service';
import {Quote} from '../../models/quotes/quote.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({opacity: 0, transform: 'translateY(-15px)'}),
            stagger(
              '10ms',
              animate(
                '250ms ease-out',
                style({opacity: 1, transform: 'translateY(0px)'})
              )
            )
          ],
          {optional: true}
        ),
        query(':leave', animate('50ms', style({opacity: 0})), {
          optional: true
        })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  quote: Observable<Quote>;
  recentTweet: Observable<Tweet>;

  constructor(private title: Title, private backendService: BackendService, private quotesService: QuotesService) {
    this.title.setTitle('ACM @ Memphis - Home');
  }

  ngOnInit() {
    this.recentTweet = this.backendService.getTweets();
    this.quote = this.quotesService.getRandomQuote();
  }
}

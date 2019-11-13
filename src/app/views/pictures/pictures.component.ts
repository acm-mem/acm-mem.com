import {Component, EventEmitter, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {BackendService} from '../../services/backend.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '10ms',
              animate(
                '250ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class PicturesComponent implements OnInit {
  pictures: Observable<string[]>;
  picturesTotal = new BehaviorSubject<number>(0);
  hasLoaded = false;

  constructor(private title: Title, private backendService: BackendService) {
    this.title.setTitle('ACM @ Memphis - Pictures');
  }

  ngOnInit() {
    this.pictures = this.backendService.getPictures().pipe(
      tap(pictures => {
        this.picturesTotal.next(pictures.length);
        this.picturesTotal.complete();
        this.hasLoaded = true;
      })
    );
  }

}

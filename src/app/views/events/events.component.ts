import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Observable} from 'rxjs';
import {startWith, tap} from 'rxjs/operators';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {Title} from '@angular/platform-browser';
import {EventGroup} from '../../models/event-group.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
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
export class EventsComponent implements OnInit {
  eventGroups: Observable<EventGroup[]>;

  constructor(private title: Title, private backendService: BackendService) {
    this.title.setTitle('ACM @ Memphis - Events');
  }

  ngOnInit() {
    this.eventGroups = this.backendService.getEvents().pipe(
      tap(e => console.log('Result:', e))
    );
  }
}

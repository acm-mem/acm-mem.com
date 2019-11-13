import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Member} from '../../models/member.model';
import {Title} from '@angular/platform-browser';
import {BackendService} from '../../services/backend.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
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
export class MembersComponent implements OnInit {
  members: Observable<Member[]>;

  constructor(private title: Title, private backendService: BackendService) {
    this.title.setTitle('ACM @ Memphis - Members');
  }

  ngOnInit() {
    this.members = this.backendService.getMembers();
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Tweet} from '../models/tweet.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TweetResponse} from '../models/response/tweet.response';
import {CalendarsResponse} from '../models/response/calendars.response';
import {Calendar} from '../models/calendar.model';
import {Member} from '../models/member.model';
import {RosterResponse} from '../models/response/roster.response';
import {PicturesResponse} from '../models/response/pictures.response';
import {EventGroup} from '../models/event-group.model';
import {CalendarEvent} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(protected httpClient: HttpClient) {
  }

  getTweets(): Observable<Tweet> {
    return this.httpClient.get<TweetResponse>('https://proxy.acm-mem.com:6969/api/tweets').pipe(
      map(res => {
        if (res.success) {
          return Tweet.fromJSON(res.tweets[0]);
        }
        return null;
      })
    );
  }

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<RosterResponse>('https://proxy.acm-mem.com:6969/api/roster').pipe(
      map(res => {
        const members: Member[] = [];

        if (res.success) {
          res.members.forEach(member => {
            if (!members.find(existingMember => existingMember.fullName === member.firstName + ' ' + member.lastName)) {
              members.push(Member.fromJSON(member));
            } else {
              const existing = members.find(existingMember => existingMember.fullName === member.firstName + ' ' + member.lastName);
              existing.position = existing.position + ', ' + member.position;
            }
          });
        }

        return members.sort((a, b) => a.fullName.localeCompare(b.fullName));
      })
    );
  }

  getEvents(): Observable<EventGroup[]> {
    return this.httpClient.get<CalendarsResponse>('https://proxy.acm-mem.com:6969/api/calendar').pipe(
      map(res => {
        const eventGroups: EventGroup[] = [];

        if (res.success) {
          const dateGroups = Object.keys(res.events);
          dateGroups.forEach(dateGroup => {
            const events = res.events[dateGroup].map(rawEvent => CalendarEvent.fromJSON(rawEvent));
            eventGroups.push(new EventGroup(events, new Date(dateGroup)));
          });
        }
        return eventGroups;
      })
    );
  }

  getPictures(): Observable<string[]> {
    return this.httpClient.get<PicturesResponse>('https://proxy.acm-mem.com:6969/api/pictures').pipe(
      map(res => {
        if (res.success) {
          return res.imageURLs;
        }
        return [];
      })
    );
  }
}

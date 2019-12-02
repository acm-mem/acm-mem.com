import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';
import {CalendarEvent} from './event.model';

@Serialize({})
export class Calendar extends Serializable {
  @SerializeProperty()
  version: string;

  @SerializeProperty()
  name: string;

  @SerializeProperty()
  color: string;

  @SerializeProperty({
    list: true,
    type: CalendarEvent
  })
  events: CalendarEvent[];

  static fromJSON(data: any): Calendar {
    const newCalendar = new Calendar();

    newCalendar.deserialize(data);
    return newCalendar;
  }
}

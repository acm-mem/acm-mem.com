import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';
import {Event} from './event.model';

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
    type: Event
  })
  events: Event[];

  static fromJSON(data: any): Calendar {
    const newCalendar = new Calendar();

    newCalendar.deserialize(data);
    return newCalendar;
  }
}

import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class CalendarEvent extends Serializable {
  @SerializeProperty()
  title: string;

  @SerializeProperty()
  description: string;

  @SerializeProperty()
  start: Date;

  @SerializeProperty()
  end: Date;

  location: string;

  public static fromJSON(json: any): CalendarEvent {
    const newEvent = new CalendarEvent();

    newEvent.deserialize(json);
    return newEvent;
  }

  get startDate(): Date {
    return new Date(this.start);
  }

  get endDate(): Date {
    return new Date(this.end);
  }
}

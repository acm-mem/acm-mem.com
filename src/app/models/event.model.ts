import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class CalendarEvent extends Serializable {
  @SerializeProperty()
  title: string;

  @SerializeProperty()
  description: string;

  @SerializeProperty()
  start: string;

  @SerializeProperty()
  end: string;

  location: string;

  public static fromJSON(json: any): CalendarEvent {
    const newEvent = new CalendarEvent();

    newEvent.deserialize(json);
    return newEvent;
  }

  get startDate(): Date {
    return new Date(new Date(this.start).toISOString());
  }

  get endDate(): Date {
    return new Date(new Date(this.end).toISOString());
  }
}

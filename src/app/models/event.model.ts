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

  private static convertDate(date: Date): Date {
    const timeZone = 'Europe/London';
    const newDate = new Date(date.toLocaleString('en-US', {timeZone}));
    const diff = date.getTime() - newDate.getTime();

    return new Date(date.getTime() + diff);
  }

  get startDate(): Date {

    return CalendarEvent.convertDate(new Date(this.start));
  }

  get endDate(): Date {
    return CalendarEvent.convertDate(new Date(this.end));
  }
}

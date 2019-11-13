import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class Event extends Serializable {
  @SerializeProperty()
  created: string;

  @SerializeProperty()
  modified: string;

  @SerializeProperty()
  id: string;

  @SerializeProperty()
  title: string;

  @SerializeProperty()
  description: string;

  @SerializeProperty()
  start: string;

  @SerializeProperty()
  end: string;

  location: string;

  get createdDate(): Date | null {
    if (this.created) {
      return this.convertDate(this.created);
    }

    return null;
  }

  get startDate(): Date | null {
    if (this.start) {
      return this.convertDate(this.start);
    }

    return null;
  }

  get endDate(): Date | null {
    if (this.start) {
      return this.convertDate(this.end);
    }

    return null;
  }

  get parsedStartDate(): string {
    if (this.startDate) {
      // @ts-ignore
      return this.startDate.toLocaleString({ dateStyle: 'medium', timeStyle: 'short' });
    }
  }

  get parsedEndDate(): string {
    if (this.endDate) {
      // @ts-ignore
      return this.endDate.toLocaleString({ dateStyle: 'medium', timeStyle: 'short' });
    }
  }

  get isAllDay(): boolean {
    return this.start && !this.start.includes('T') && this.end && !this.end.includes('T');
  }

  private convertDate(dateString: string): Date | null {
    if (!dateString.includes('T')) {
     return this.convertSingleDate(dateString);
    }

    if (!this.validateDate(dateString)) {
      return null;
    }

    const year = Number(dateString.substr(0, 4));
    const month = parseInt(dateString.substr(4, 2), 10) - 1;
    const day = Number(dateString.substr(6, 2));
    const hour = Number(dateString.substr(9, 2));
    const minute = Number(dateString.substr(11, 2));
    const second = Number(dateString.substr(13, 2));

    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }

  private convertSingleDate(dateString: string): Date {
    const year = Number(dateString.substr(0, 4));
    const month = parseInt(dateString.substr(4, 2), 10) - 1;
    const day = Number(dateString.substr(6, 2));

    return new Date(Date.UTC(year, month, day));
  }

  private validateDate(dateString: string): boolean {
    const d = dateString.split('');
    const T_INDEX = 8;
    const Z_INDEX = 15;

    if (d.length !== 16) {
      return false;
    }

    if (d[T_INDEX] !== 'T') {
      return false;
    }

    if (d[Z_INDEX] !== 'Z') {
      return false;
    }

    return d
      .filter((x, i) => i !== T_INDEX && i !== Z_INDEX)
      // tslint:disable-next-line:radix
      .every(x => !isNaN(parseInt(x)));
  }
}

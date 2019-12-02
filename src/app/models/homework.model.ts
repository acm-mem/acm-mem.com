import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class Homework extends Serializable {
  @SerializeProperty()
  semester: string;

  @SerializeProperty()
  url: string;

  @SerializeProperty()
  professor: string;

  @SerializeProperty()
  title: string;

  static fromJSON(data: any): Homework {
    const newHomework = new Homework();

    newHomework.deserialize(data);
    return newHomework;
  }
}

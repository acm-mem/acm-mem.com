import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class Textbook extends Serializable {
  @SerializeProperty()
  semester: string;

  @SerializeProperty()
  url: string;

  @SerializeProperty()
  professor: string;

  @SerializeProperty()
  title: string;

  static fromJSON(data: any): Textbook {
    const newTextbook = new Textbook();

    newTextbook.deserialize(data);
    return newTextbook;
  }
}

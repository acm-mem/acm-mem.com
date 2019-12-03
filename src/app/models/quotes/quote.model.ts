import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class Quote extends Serializable {
  @SerializeProperty()
  id: string;

  @SerializeProperty({
    map: 'en',
  })
  text: string;

  @SerializeProperty()
  author: string;
}

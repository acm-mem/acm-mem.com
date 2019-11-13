import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class MediaEntry extends Serializable {
  @SerializeProperty()
  imageURL: string;
}

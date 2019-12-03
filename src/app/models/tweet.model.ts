import {Entity} from './entity.model';
import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class Tweet extends Serializable {
  @SerializeProperty()
  date: string;

  @SerializeProperty()
  text: string;

  @SerializeProperty()
  mediaURL: string;

  @SerializeProperty()
  mediaType: string;

  static fromJSON(data: any): Tweet {
    const newTweet = new Tweet();

    newTweet.deserialize(data);
    return newTweet;
  }
}

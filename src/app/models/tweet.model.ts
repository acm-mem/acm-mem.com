import {Entity} from './entity.model';
import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class Tweet extends Serializable {
  @SerializeProperty()
  date: string;

  @SerializeProperty()
  text: string;

  @SerializeProperty({
    type: Entity
  })
  entities: Entity;

  get imageURL(): string | null {
    if (this.entities && this.entities.mediaEntries && this.entities.mediaEntries[0] && this.entities.mediaEntries[0].imageURL) {
      return this.entities.mediaEntries[0].imageURL;
    }
    return null;
  }

  static fromJSON(data: any): Tweet {
    const newTweet = new Tweet();

    newTweet.deserialize(data);
    return newTweet;
  }
}

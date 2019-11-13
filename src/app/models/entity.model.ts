import {MediaEntry} from './media-entry.model';
import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class Entity extends Serializable {
  @SerializeProperty({
    list: true,
    type: MediaEntry
  })
  mediaEntries: MediaEntry[];
}

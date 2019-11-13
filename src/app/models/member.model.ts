import {Serializable, Serialize, SerializeProperty} from 'ts-serializer';

@Serialize({})
export class Member extends Serializable {
  @SerializeProperty()
  firstName: string;

  @SerializeProperty()
  lastName: string;

  @SerializeProperty()
  emailAddress: string;

  @SerializeProperty()
  position: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromJSON(data: any): Member {
    const newMember = new Member();

    newMember.deserialize(data);
    return newMember;
  }
}

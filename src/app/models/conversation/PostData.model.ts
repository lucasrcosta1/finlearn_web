import { UserInfo } from "../user/UserInfo.model";

export class PostData {
  id?          : number;
  title?       : string;
  body_text?   : string;
  user?        : UserInfo;
  date_created?: Date;

  constructor (
    id?          : number,
    title?       : string,
    body_text?   : string,
    user?        : UserInfo,
    date_created?: Date,
  ) {
    this.id           = id;
    this.title        = title;
    this.body_text    = body_text;
    this.user         = user;
    this.date_created = date_created;
  }
}

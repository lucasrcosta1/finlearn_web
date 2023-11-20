import { UserInfo } from "../user/UserInfo.model";

export class ReplyData {
  post_id?         : number;
  body_text?  : string;
  user?       : UserInfo;
  date_created?: Date;

  constructor (replyData?: ReplyData) {
    this.post_id    = replyData?.post_id;
    this.body_text  = replyData?.body_text;
    this.user       = replyData?.user;
    this.date_created = replyData?.date_created;
  }
}

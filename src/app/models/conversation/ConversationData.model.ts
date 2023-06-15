import { UserInfo } from "../user/UserInfo.model";
import { PostData } from "./PostData.model";

export class ConversationData {
  id?          : number;
  title?       : string;
  user?        : UserInfo;
  content?     : Array<PostData>;
  showContent? : boolean; // 'ver mais' == false | 'ver menos' == true

  constructor (
    id?          : number,
    title?       : string,
    user?        : UserInfo,
    content?     : Array<PostData>,
    showContent? : boolean
  ) {
    this.id           = id;
    this.title        = title;
    this.user         = user;
    this.content      = content;
    this.showContent  = showContent;
  }
}

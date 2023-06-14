import { UserInfo } from "../user/UserInfo.model";
import { LikeData } from "./LikeData.model";

export class PostData {
  id?         : number;
  base_text?  : string;
  user?       : UserInfo;
  likes_data? : LikeData[];

  constructor (postData: PostData) {
    this.id         = postData.id;
    this.base_text  = postData.base_text;
    this.user       = postData.user;
    this.likes_data = postData.likes_data;
  }
}

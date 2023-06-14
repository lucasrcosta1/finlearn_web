import { UserInfo } from "../user/UserInfo.model";

export class LikeData {
  user?: UserInfo;

  constructor (likeData?: LikeData) {
    this.user = likeData?.user;
  }
}

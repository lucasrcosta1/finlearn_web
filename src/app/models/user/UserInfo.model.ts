export class UserInfo {
  id?: number;
  name?: string;
  likes_data?: Array<UserInfo>;
  email?: string;

  constructor (userInfo?: UserInfo) {
    this.id = userInfo?.id;
    this.name = userInfo?.name;
    this.likes_data = userInfo?.likes_data;
    this.email = userInfo?.email;

  }
}

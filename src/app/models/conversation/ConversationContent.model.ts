export class ConversationContent {
  username: string;
  commentary: string;
  //userPicture

  constructor (username: string, commentary: string) {
    this.username = username;
    this.commentary = commentary;
  }
}

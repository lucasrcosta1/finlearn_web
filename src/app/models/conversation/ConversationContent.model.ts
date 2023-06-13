export class ConversationContent {
  username  : string;
  base_text : string;
  talk_id   : number;

  constructor (username: string, base_text: string, talk_id: number) {
    this.username   = username;
    this.base_text  = base_text;
    this.talk_id    = talk_id;
  }
}

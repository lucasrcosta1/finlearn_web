import { ConversationContent } from "./ConversationContent.model";

export class ConversationData {
  id: number;
  title: string;
  content: Set<ConversationContent>; //key: n
  showContent: boolean; // ver mais == false | ver menos == true

  constructor (
    id: number,
    title: string,
    content: Set<ConversationContent>,
    showContent: boolean
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.showContent = showContent;
  }
}

import { ConversationContent } from "./ConversationContent.model";

export class ConversationData {
  title: string;
  content: Set<ConversationContent>; //key: n
  showContent: boolean; // ver mais == false | ver menos == true

  constructor (
    title: string,
    content: Set<ConversationContent>,
    showContent: boolean
  ) {
    this.title = title;
    this.content = content;
    this.showContent = showContent;
  }
}

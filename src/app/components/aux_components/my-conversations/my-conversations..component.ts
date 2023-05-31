import { Component } from '@angular/core';
import { ConversationContent } from 'src/app/models/conversation/ConversationContent.model';
import { ConversationData } from 'src/app/models/conversation/ConversationData.model';

@Component({
  selector: 'app-my-conversations',
  templateUrl: './my-conversations.component.html',
  styleUrls: ['./my-conversations.component.css']
})
export class MyConversationsComponent {
  public dropdown = false;
  public conversations: Array<ConversationData>;

  constructor () {
    this.conversations = new Array<ConversationData>();
    //mock conversation
    //first conversation
    let aux1 = new Set<ConversationContent> ();
    aux1.add(
      new ConversationContent (
        "Nome usuário 1",
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.'
      )
    );
    this.conversations.push(new ConversationData(
      'Título Conversa 1',
      aux1,
      false
    ));

    //second conversation
    let aux2 = new Set<ConversationContent> ();
    aux2.add(
      new ConversationContent (
        "Nome usuário 2",
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.'
      )
    );
    aux2.add(
      new ConversationContent (
        "Nome usuário 3",
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.'
      )
    );
    aux2.add(
      new ConversationContent (
        "Nome usuário 1",
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.'
      )
    );
    this.conversations.push(new ConversationData(
      'Título Conversa 2',
      aux2,
      false
    ));

    //third conversation
    let aux3 = new Set<ConversationContent> ();
    aux3.add(
      new ConversationContent (
        "Nome usuário 3",
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.'
      )
    );
    this.conversations.push(new ConversationData(
      'Título Conversa 3',
      aux3,
      false
    ));

  }

  public convertSetToArray(set: Set<ConversationContent>): ConversationContent[] {
    return Array.from(set);
  }

}

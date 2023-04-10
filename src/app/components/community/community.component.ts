import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {

  conversations: { title: string }[] = [
    { title: 'Conversation 1' },
    { title: 'Conversation 2' },
    { title: 'Conversation 3' },
    { title: 'Conversation 4' },
    { title: 'Conversation 5' },
    { title: 'Conversation 6' }
  ];

  filteredConversations: { title: string }[] = [];

  searchTerm = '';

  constructor() {
    this.filteredConversations = this.conversations;
  }

  search() {
    this.filteredConversations = this.conversations.filter(conversation => conversation.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    //'searchTerm' armazena o valor da entrada de pesquisa do usuário na barra de pesquisa
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredConversations = this.conversations;
  }
}

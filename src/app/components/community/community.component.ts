import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: localStorage.getItem("auth-key")!
  })
};

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  newTitle = false;
  conversation = "Nova Conversa";
  createConversationRoute = "/talk/create";
  searchRoute = "";

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

  constructor(
    private http: HttpClient
  ) {
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

  openNewConversationModal(){

  }


  public changeView (): void {
    this.newTitle = !this.newTitle;
    if (this.newTitle) this.conversation = "Voltar";
    else this.conversation = "Nova Conversa";
  }

  public createNewConversation () {
    let titleValue = (<HTMLInputElement>document.getElementById('search-bar'))?.value;
    if (titleValue != undefined || titleValue != null) {
      this.http.post<string>(
        environment.HTTP_REQUEST + '/talk/create', {title: titleValue}, httpOptions).subscribe(
          (response) => {
            console.log(response);
          }
      );
    }
  }

  public getConversation () {

  }
}

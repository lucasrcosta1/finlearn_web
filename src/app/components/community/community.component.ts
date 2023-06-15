import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConversationData } from 'src/app/models/conversation/ConversationData.model';
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
  activeTab: string = 'tab1';
  createConversationRoute = "/talk/create";
  searchRoute = "";
  conversation: ConversationData;
  disableClick$ = new BehaviorSubject(true);

  constructor(
    private http: HttpClient
  ) {
    this.conversation = new ConversationData();
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

  public activateTab(tab: string) {
    this.activeTab = tab;
    this.disableClick$.next(true);
  }

  /**
   * Get created conversation and reply it for the conversation Array.
   * @param conversation
   */
  public handleNewConversation (conversation: ConversationData): void {
    this.conversation = conversation;
  }

  /**
   * Get wheter button should be disabled or not.
   * @param conversation
   */
  public handleClickValue (clickValue: boolean): void {
    // console.log(this.activeTab,clickValue);
    this.disableClick$.next(clickValue);
  }

}

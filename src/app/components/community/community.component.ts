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
  activeTab: string = 'tab1';
  createConversationRoute = "/talk/create";
  searchRoute = "";

  constructor(
    private http: HttpClient
  ) { }

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

  activateTab(tab: string) {
    this.activeTab = tab;
  }
}

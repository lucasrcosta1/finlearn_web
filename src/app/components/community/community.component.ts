import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PostData } from 'src/app/models/conversation/PostData.model';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {

  public disableClick$ = new BehaviorSubject(true);
  public conversations: Array<PostData>;
  public loaded$ = new BehaviorSubject(false);

  private fetchConversationsRoute = "/network/posts";


  constructor(
    private _snackBarService: SnackbarService,
    private _http: HttpClient,
    private _router: Router,
  ) {

    this.conversations = new Array<PostData>();
  }

  async ngOnInit (): Promise<void> {
    await this._fetchConversations();
  }

  /**
   * Get conversations from api.
   * @returns
   */
  private async _fetchConversations (): Promise<void> {
    //const token = localStorage.getItem("credential");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4YjVmNzJhZS0xNTk2LTQ3ODQtOTIwOC1hMzdmMjJkMDhmOWIiLCJleHAiOjE3MDA3NzAzMzV9.139bouVKON18pjpspNLQ6UWaJ9mBpvtChi8uIJjNubU";
    if (token) {
      const header: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this._http.get(environment.HTTP_REQUEST + this.fetchConversationsRoute, {headers: header}).subscribe(
        response => {
          console.log("Response:", response);       
        }
      );
    } else {
      this._snackBarService.openSnackBar(2, "Usuário não autenticado.");
    }
  }

}

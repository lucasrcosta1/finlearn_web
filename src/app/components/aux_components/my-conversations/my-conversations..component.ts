import { Component } from '@angular/core';
import { ConversationContent } from 'src/app/models/conversation/ConversationContent.model';
import { ConversationData } from 'src/app/models/conversation/ConversationData.model';
import { ApiService } from 'src/app/service/api/api.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
  selector: 'app-my-conversations',
  templateUrl: './my-conversations.component.html',
  styleUrls: ['./my-conversations.component.css']
})
export class MyConversationsComponent {
  public dropdown = false;
  public conversations: Array<ConversationData>;
  public createPostRoute = '/post/create';

  private route = "/user/me/talks";


  constructor (
    private _api: ApiService,
    private _snackBarService: SnackbarService,
  ) {
    this.conversations = new Array<ConversationData>();
  }

  async ngOnInit (): Promise<void> {
    let aux1 = new Set<ConversationContent>();
    aux1 = await this._fetchMyConversation();
  }

  public convertSetToArray(set: Set<ConversationContent>): ConversationContent[] {
    return Array.from(set);
  }

  private async _fetchMyConversation (): Promise<Set<ConversationContent>> {
    let treatedData = new Set<ConversationContent>();
    if (this.route != "") {
      let rs = await this._api.get(this.route);
      if (rs.getSuccess()) { //activate success/error button
        // console.log("success",r.getResponse());
        this._snackBarService.openSnackBar(2,"Conversas recuperadas!");
        rs.getResponse().forEach(
          r => {
            if (r.post_data.length > 0) {
              let auxSet = new Set<ConversationContent>();
              r.post_data.forEach(
                post => {
                  // console.log(post);
                  auxSet.add(post);
                }
              );
              this.conversations.push(new ConversationData(
                r.id,
                r.title,
                auxSet,
                false
              ));
            } else {
              this.conversations.push(new ConversationData(
                r.id,
                r.title,
                new Set<ConversationContent>(),
                false
              ));
            }
          }
        );

      } else {
        // console.log("error",r.getResponse());
        this._snackBarService.openSnackBar(2,"Erro ao recuperar conversas.");
      }
    } else {
      this._snackBarService.openSnackBar(2,"Erro ao recuperar conversas.");
    }
    return treatedData;
  }


  /**
   * Get user name by given id.
   * @todo fix method to fetch from backend instead of getting user from localstorage.
   * @param id
   * @returns
   */
  private _getUserNameById (id: number) {
    return localStorage.getItem('username')!;
  }
}

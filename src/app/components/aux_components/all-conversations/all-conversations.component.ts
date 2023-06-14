import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConversationData } from 'src/app/models/conversation/ConversationData.model';
import { PostData } from 'src/app/models/conversation/PostData.model';
import { ApiService } from 'src/app/service/api/api.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
  selector: 'app-all-conversations',
  templateUrl: './all-conversations.component.html',
  styleUrls: ['./all-conversations.component.css']
})
export class AllConversationsComponent {
  public dropdown = false;
  public conversations: Array<ConversationData>;
  public createPostRoute = '/post/create';
  public loaded$ = new BehaviorSubject(false);

  private route = "/talk";

  constructor (
    private _api: ApiService,
    private _snackBarService: SnackbarService,
  ) {
    this.conversations = new Array<ConversationData>();
  }

  async ngOnInit (): Promise<void> {
    await this._fetchMyConversation();
  }

  /**
   * Change heart's color, like's value and create the POST request to persist click.
   * @param userId
   * @param position
   */
  public async countLike (userId: PostData, position: number): Promise<void> {
    // console.log(userId);
    userId.likes_data?.push(userId);
    (<HTMLInputElement>document.getElementById(`heart${position}`))!.style.color = 'red';
    if (userId.id) {
      let rs = await this._api.post('/post/like', null, userId.id);
      if (rs.getSuccess()) {
        this._snackBarService.openSnackBar(1,"Post curtido!");
      } else {

        this._snackBarService.openSnackBar(1,rs.getResponse());
      }
    }

  }

  /**
   * Get conversations from api.
   * @returns
   */
  private async _fetchMyConversation (): Promise<void> {
    if (this.route != "") {
      let rs = await this._api.get(this.route);
      if (rs.getSuccess()) { //activate success/error button
        // console.log("success",r.getResponse());
        rs.getResponse().forEach(
          r => {
            if (r.post_data.length > 0) {
              let auxSet = new Array<PostData>();
              r.post_data.forEach(
                post => {
                  // console.log(post);
                  auxSet.push(post);
                }
              );
              this.conversations.push(new ConversationData(
                r.id,
                r.title,
                r.user,
                auxSet,
                false
              ));
            } else {
              this.conversations.push(new ConversationData(
                r.id,
                r.title,
                r.user,
                new Array<PostData>(),
                false
              ));
            }
          }
        );

        this._snackBarService.openSnackBar(2,"Conversas recuperadas!");
        this.loaded$.next(true);
        console.log(this.conversations);
        // this._updateConversationContent();

      } else {
        // console.log("error",r.getResponse());
        this._snackBarService.openSnackBar(2,"Erro ao recuperar conversas.");
      }
    } else {
      this._snackBarService.openSnackBar(2,"Erro ao recuperar conversas na rota.");
    }
  }

}

import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Input()
  public conversation = new ConversationData();
  @Output()
  public disableClick = new EventEmitter<boolean>();
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

  ngOnChanges (changes: SimpleChanges) {
    if (changes['conversation']) {
      if (changes['conversation'].currentValue) {
        let conversation = changes['conversation'].currentValue;
        let size = this.conversations.length-1;
        if (size >= 0) {
          // console.log(size, this.conversations[size].id! + 1);
          conversation.id = (this.conversations[size].id! + 1);
          this.conversations.push(conversation);
        }
      }
    }
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
   * Create new post data to be added in the array of posts of the conversation.
   * @param i
   * @param postContent
   */
  public addNewPost(i:number, postContent: string): void{
    let post_id, numberOfPostInConversation = this.conversations[i].content!.length;
    if (numberOfPostInConversation > 1)
      post_id = this.conversations[i].content![numberOfPostInConversation-1].id! + 1
    else post_id = 1;
    let user_id = Number(localStorage.getItem('id')!);
    let name    = localStorage.getItem('username')!;
    let email    = localStorage.getItem('email')!;

    let post = new PostData({
      id: post_id,
      base_text: postContent,
      user: {
          id: user_id,
          name: name,
          email: email
      },
      likes_data: []
    });

    this.conversations[i].content!.push(post);
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
        this.disableClick.emit(false);

      } else {
        // console.log("error",r.getResponse());
        this._snackBarService.openSnackBar(2,"Erro ao recuperar conversas.");
      }
    } else {
      this._snackBarService.openSnackBar(2,"Erro ao recuperar conversas na rota.");
    }
  }

}

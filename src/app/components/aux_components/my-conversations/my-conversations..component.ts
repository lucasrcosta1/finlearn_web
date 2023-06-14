import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostData } from 'src/app/models/conversation/PostData.model';
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
  public loaded$ = new BehaviorSubject(false);

  private route = "/user/me/talks";

  constructor (
    private _api: ApiService,
    private _snackBarService: SnackbarService,
  ) {
    this.conversations = new Array<ConversationData>();

    //test
    // //mock conversation
    // //first conversation
    // let aux1 = new Set<PostData> ();
    // aux1.add(
    //   new PostData (
    //     "Nome usuário 1",
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.',
    //     1
    //   )
    // );
    // this.conversations.push(new ConversationData(
    //   1,
    //   'Título Conversa 1',
    //   aux1,
    //   false
    // ));
    // //second conversation
    // let aux2 = new Set<PostData> ();
    // aux2.add(
    //   new PostData (
    //     "Nome usuário 2",
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.',
    //     2
    //   )
    // );
    // aux2.add(
    //   new PostData (
    //     "Nome usuário 3",
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.',
    //     3
    //   )
    // );
    // aux2.add(
    //   new PostData (
    //     "Nome usuário 1",
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.',
    //     3
    //   )
    // );
    // this.conversations.push(new ConversationData(
    //   2,
    //   'Título Conversa 2',
    //   aux2,
    //   false
    // ));

    // //third conversation
    // let aux3 = new Set<PostData> ();
    // aux3.add(
    //   new PostData (
    //     "Nome usuário 3",
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis lectus id sem interdum molestie. Etiam scelerisque tellus vitae lorem faucibus accumsan. Mauris euismod dignissim imperdiet. Maecenas ante arcu, varius a dictum non, interdum sed nisi. In rhoncus, nulla sit amet facilisis molestie, odio nulla pulvinar nibh, sit amet venenatis.',
    //     4
    //   )
    // );
    // this.conversations.push(new ConversationData(
    //   3,
    //   'Título Conversa 3',
    //   aux3,
    //   false
    // ));
    //\test
  }

  ngOnInit (): void {
    this._fetchMyConversation();
  }

  /**
   * Create new post data to be added in the array of posts of the conversation.
   * @param i
   * @param postContent
   */
  public addNewPost(i:number, postContent: string): void{
    let post_id, numberOfPostInConversation = this.conversations[i].content.length;
    if (numberOfPostInConversation > 1)
      post_id = this.conversations[i].content[numberOfPostInConversation-1].id! + 1
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

    this.conversations[i].content.push(post);
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

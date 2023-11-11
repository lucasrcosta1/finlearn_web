import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ConversationData } from 'src/app/models/conversation/ConversationData.model';
import { LikeData } from 'src/app/models/conversation/LikeData.model';
import { PostData } from 'src/app/models/conversation/PostData.model';
import { UserInfo } from 'src/app/models/user/UserInfo.model';
import { ApiService } from 'src/app/service/api/api.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
  selector: 'app-btn-plus-input',
  templateUrl: './btn-plus-input.component.html',
  styleUrls: ['./btn-plus-input.component.css']
})
export class BtnPlusInputComponent {
  @Input()
  public iconClass = "";
  @Input()
  public commentary = "";
  @Input()
  public value = "null";
  @Input()
  public route = "";
  @Input()
  public talk_id = -1;
  @Input()
  public disableClick$ = new BehaviorSubject(true);
  @Output()
  postContent = new EventEmitter<PostData>();
  @Output()
  conversation = new EventEmitter<ConversationData>();

  commentForm: FormGroup;

  constructor (
    private _api: ApiService,
    private _snackbarService: SnackbarService,
    private formBuilder: FormBuilder,
  ) {
    this.commentForm = this.formBuilder.group({
      commentInput: ['', Validators.required]
    });
  }

  /**
   * Submit form to back-end.
   */
  async submitForm (): Promise<void> {
    if (this.route != "") {
      let requestBody;
      if (this.talk_id > -1) requestBody = {base_text: this.commentForm.value.commentInput, talk_id: this.talk_id};
      else requestBody = {title: this.commentForm.value.commentInput};
      let r = await this._api.post(this.route, requestBody, null);
      if (r.getSuccess()) { //activate success/error button
        let user = this._createUser();
        if (this.route == '/talk/create') {
          this._snackbarService.openSnackBar(2,`Conversa criada com sucesso!`);
          this.conversation.emit(this._createConversation(r.getResponse().id,this.commentForm.value.commentInput, user));
        } else if (this.route == '/post/create') {
          this._snackbarService.openSnackBar(2,`Post criado com sucesso!`);
          this.postContent.emit(this._createPost(r.getResponse().id,this.commentForm.value.commentInput, user));
        }
        this.commentForm.get('commentInput')?.reset();
      } else {
        console.log("error",r.getResponse());
        if (this.route == '/talk/create') {
          this._snackbarService.openSnackBar(2,"Erro ao criar conversa.");
        } else if (this.route == '/post/create') {
          this._snackbarService.openSnackBar(2,"Erro ao criar post.");
        }
      }
    } else {
      this._snackbarService.openSnackBar(2,"Erro ao pesquisar.");
    }
  }

  private _createConversation (id: number,title: string, userInfo: UserInfo): ConversationData {
    let conversation = new ConversationData();
    conversation.id = id;
    conversation.user = new UserInfo();
    conversation.title = title;
    conversation.user = userInfo;
    conversation.content = new Array<PostData>();
    conversation.showContent = false;
    return conversation;
  }

  private _createPost (id: number, base_text: string, userInfo: UserInfo): PostData {
    let postData = new PostData();
    postData.id = id;
    postData.base_text = base_text;
    postData.user = userInfo;
    postData.likes_data = new Array<LikeData>();
    return postData;
  }

  private _createUser (): UserInfo {
    let userInfo = new UserInfo();
    userInfo.id = Number(localStorage.getItem("id")!);
    userInfo.name = localStorage.getItem("username")!;
    userInfo.likes_data = new Array<UserInfo>();
    userInfo.email = localStorage.getItem("email")!
    return userInfo;
  }
}

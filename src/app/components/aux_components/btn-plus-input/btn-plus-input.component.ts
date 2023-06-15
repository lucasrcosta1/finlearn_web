import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ConversationData } from 'src/app/models/conversation/ConversationData.model';
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
  postContent = new EventEmitter<string>();
  @Output()
  conversation = new EventEmitter<ConversationData>();

  commentForm: FormGroup;

  constructor (
    private _api: ApiService,
    private _snackBarService: SnackbarService,
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
        this._snackBarService.openSnackBar(2,"Conversa criada com sucesso!");
        this.postContent.emit(this.commentForm.value.commentInput);
        this.conversation.emit(this._createConversation(this.commentForm.value.commentInput));
        this.commentForm.get('commentInput')?.reset();
      } else {
        console.log("error",r.getResponse());
        this._snackBarService.openSnackBar(2,"Erro ao criar conversa.");
      }
    } else {
      this._snackBarService.openSnackBar(2,"Erro ao pesquisar.");
    }
  }

  private _createConversation (title: string): ConversationData {
    let conversation = new ConversationData();
    conversation.user = new UserInfo();
    conversation.title = title;
    conversation.user!.id = Number(localStorage.getItem("id")!);
    conversation.user!.name = localStorage.getItem("username")!;
    conversation.user!.email = localStorage.getItem("email")!;
    conversation.user!.likes_data = new Array<UserInfo>();
    conversation.content = new Array<PostData>();
    conversation.showContent = false;
    return conversation;
  }
}

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        // window.location.reload();
      } else {
        console.log("error",r.getResponse());
        this._snackBarService.openSnackBar(2,"Erro ao criar conversa.");
      }
    } else {
      this._snackBarService.openSnackBar(2,"Erro ao pesquisar.");
    }
  }
}

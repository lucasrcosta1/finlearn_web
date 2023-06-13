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
      let requestBody = {title: this.commentForm.value.commentInput};
      let r = await this._api.post(this.route, requestBody);
      if (r.getSuccess()) { //activate success/error button
        // console.log("success",r.getResponse());
        this._snackBarService.openSnackBar(2,"Conversa criada com sucesso!");
      } else {
        // console.log("error",r.getResponse());
        this._snackBarService.openSnackBar(2,"Erro ao criar conversa.");
      }
    } else {
      this._snackBarService.openSnackBar(2,"Erro ao pesquisar.");
    }
  }
}

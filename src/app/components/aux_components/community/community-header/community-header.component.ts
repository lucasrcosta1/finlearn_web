import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { PostData } from 'src/app/models/conversation/PostData.model';

@Component({
  selector: 'app-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.css']
})
export class CommunityHeaderComponent {
  @Input()
  public active_tab: string = "";
  public disableClick$ = new BehaviorSubject(true);
  private createPostRoute = "/network/create-post";
  private post : PostData;

  ActiveTab(tab: string) {
    this.active_tab = tab;
    this.disableClick$.next(true);
  }

  constructor(
    private _snackBarService: SnackbarService,
    private _router: Router,
  ){
    this.post = new PostData;
  }
  
  /**
   * Create conversation
   */
    goToCreateConversationPage () : void{
      const input = document.getElementById('search_bar') as HTMLInputElement | null;
      if(input != null){
        if(input!.value != ""){
          localStorage.setItem('post_title', input.value);
          this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this._router.navigate([`/community/create-post`])
          });
        } else {
          this._snackBarService.openSnackBar(10, "Impossível criar uma conversa sem título.");
        }
      } 
    }

    goToCommunityPage (): void{
      this._router.navigate([`/community`]);
    }
}

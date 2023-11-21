import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PostData } from 'src/app/models/conversation/PostData.model';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/api/api.service';
import { Obj } from '@popperjs/core';
import { UserInfo } from 'src/app/models/user/UserInfo.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {

  public disableClick$ = new BehaviorSubject(true);
  public posts: Array<PostData>;
  public loaded$ = new BehaviorSubject(false);
  private fetchPostsRoute = "/network/posts";


  constructor(
    private _snackBarService: SnackbarService,
    private _http: HttpClient,
    private _router: Router,
    private _apiService: ApiService
  ) {
    this.posts = new Array<PostData>();
  }

  async ngOnInit (): Promise<void> {
    this._fetchPosts();
  }

  /**
   * Get posts from api.
   * @returns
   */
  private async _fetchPosts (): Promise<void> {
    const token = localStorage.getItem("credential");
    if (token) {
      const header: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this._http.get(environment.HTTP_REQUEST + this.fetchPostsRoute, {headers: header}).subscribe(
        response => {
          this.posts = response as Array<PostData>;
          this.loaded$.next(true);
        }
      )
    } else {
      this._snackBarService.openSnackBar(2, "Usuário não autenticado.");
    }
  }

  public getFormattedDate(date : Date){
    return this._apiService.getFormattedDate(date);
  }
}

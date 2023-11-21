import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-community-create-post',
  templateUrl: './community-create-post.component.html',
  styleUrls: ['./community-create-post.component.css']
})
export class CommunityCreatePostComponent {
  private createPostRoute = "/network/create-post"
  public post_title: string | null = null;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _snackBarService : SnackbarService,
    private _apiService : ApiService,
    ){
      this.post_title = localStorage.getItem('post_title');
    }

  async ngOnInit(): Promise<void>{
    if(this.post_title != null){
      localStorage.removeItem('post_title');
    }else{
      this._router.navigate([`/community`])
    }
  }

  getLoggedUserName() {
    return JSON.parse(localStorage.getItem('user_info') || '{}').name;
  }

  createPost(comment: string){
    const token = localStorage.getItem("credential");
    if (token) {
      const requestBody = { title: this.post_title, body_text: comment }
      const header: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this._http.post(environment.HTTP_REQUEST + this.createPostRoute, requestBody, {headers: header}).subscribe(
        response => {
          console.log("Response:", response);
        }
      );
      this._router.navigate([`/community`]);
    } else {
      this._snackBarService.openSnackBar(2, "Usuário não autenticado.");
    }
  }

  getCurrentDayDate(){
    return this._apiService.getFormattedDate(new Date());
  }
}

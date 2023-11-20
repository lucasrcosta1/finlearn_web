import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-create-post',
  templateUrl: './community-create-post.component.html',
  styleUrls: ['./community-create-post.component.css']
})
export class CommunityCreatePostComponent {
  private createConversationRoute = "/network/create-post"
  public post_title!: string;
  public current_date: Date

  constructor(
    private _router: Router,
    ){
      this.current_date = new Date()
    }

  async ngOnInit(): Promise<void>{
    if(localStorage.getItem('post_title') != null){
      this.post_title = localStorage.getItem('post_title')!;
      localStorage.removeItem('post_title');
    }else{
      this._router.navigate([`/community`])
    }
  }

  formatDate() {
    const months = ["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return this.current_date.getDay() + " " + months[this.current_date.getMonth()] + " " + this.current_date.getFullYear();
  }

  
}

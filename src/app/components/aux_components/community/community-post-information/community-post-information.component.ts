import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-community-post-information',
  templateUrl: './community-post-information.component.html',
  styleUrls: ['./community-post-information.component.css']
})
export class CommunityPostInformationComponent {

  @Input()
  post_title!: string;
  @Input()
  coins!: number;
  @Input()
  replies!: number;
  @Input()
  date!: string;
  @Input()
  name!: string;
}

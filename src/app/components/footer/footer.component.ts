import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private _content: string[] = [
    environment.INSTA,
    environment.FB,
    environment.TWITTER,
    environment.MAIL_TO
  ];

  constructor (
    private _router: Router,
  ) {}

  /**
   * Redirect page to the choosen app.
   * @param app
   */
  public redirect (app: string) {
    if (app === 'instagram')
      window.open(this._content[0], '_blank');
    else if (app === 'facebook')
      window.open(this._content[1], '_blank');
    else if (app === 'twitter')
      window.open(this._content[2], '_blank');
    else if (app === 'email')
      window.open(this._content[3]);
    else console.error('Application not recognized.');
  }

}

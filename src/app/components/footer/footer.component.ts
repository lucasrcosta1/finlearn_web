import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private _content: string[] = [
    'https://instagram.com',
    'https://facebook.com',
    'https://twitter.com',
    'mailto:projetoPDSI1@projetoPDSI1.com?Subject=Email de contato&body=Corpo do email de contato'
  ];

  constructor (
    private _router: Router,
  ) {}

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

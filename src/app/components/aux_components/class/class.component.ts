import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  private module: UrlSegment[];

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.module = this.route.snapshot.url;
  }

  goBack (): void {
    const route = `/${this.module[0]}/${this.module[1]}`;
    this.router.navigate([route]);
  }
}

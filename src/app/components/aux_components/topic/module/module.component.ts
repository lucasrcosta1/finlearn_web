import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  private module: UrlSegment[];

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.module = this.route.snapshot.url;
  }

  goBack (): void {
    this.router.navigate(['/learn']);
  }

  goToClass (className: string): void {
    const route = `/${this.module[0]}/${this.module[1]}/${className}`;
    this.router.navigate([route]);
  }
}

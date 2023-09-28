import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Lecture } from 'src/app/models/topic/module/lecture/Lecture.model';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent {

  lecture: Lecture| null = null;

  private module: UrlSegment[];

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {
    
    this.module = this.route.snapshot.url;
    this.lecture = this._getLecture(this.module[2].path); 

  }

  /**
   * Go back to previous page.
   */
  goBack (): void {
    const route = `/${this.module[0]}/${this.module[1]}`;
    this.router.navigate([route]);
  }

  private _getLecture (lectureTitle: string): Lecture | null {

    console.log("Lecture title: " + lectureTitle);
    const strLecture = localStorage.getItem("clickedLecture");
    const lecture = strLecture ? JSON.parse(strLecture) : null;
    if (lecture) return lecture;
    return null;

  }

}

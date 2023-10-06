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
  nextLectures: Lecture[] | null = null;

  private module: UrlSegment[];


  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {
    
    this.module = this.route.snapshot.url;
    const clickedTitle = this.module[2].path;
    this.lecture = this._getLecture(clickedTitle); 
    this.nextLectures = this._getNextLecture(clickedTitle);
    console.log(this.lecture, this.nextLectures);

  }

  /**
   * Go back to previous page.
   */
  goBack (): void {
    const route = `/${this.module[0]}/${this.module[1]}`;
    this.router.navigate([route]);
  }

  /**
   * Get actual lecture info.
   * @param lectureTitle 
   * @returns 
   */
  private _getLecture (lectureTitle: string): Lecture | null {

    console.log("Lecture title: " + lectureTitle);
    const strLecture = localStorage.getItem("clickedLecture");
    const lecture = strLecture ? JSON.parse(strLecture) : null;
    if (lecture) return lecture;
    return null;

  }

  /**
   * Get next 4 lecture's preview data.
   * @param actualLectureTitle 
   */
  private _getNextLecture (actualLectureTitle: string): Lecture[] | null {

    const route = "/next-lectures-preview";
    return [
      new Lecture({
        title      : "O que são títulos públicos?",
        difficulty : 1,
        lectureSize: 600000,
        seenAlready: true,
        stoppedAt: null,
        videoPath: null,
        lectureLogo: "/assets/images/learn/titulos/o_que_sao.svg"
      }),
      new Lecture({
        title      : "Vantagens de investir em títulos públicos",
        difficulty : 1,
        lectureSize: 600000,
        seenAlready: true,
        stoppedAt: null,
        videoPath: null,
        lectureLogo: "/assets/images/learn/titulos/o_que_sao.svg"
      }),
      new Lecture({
        title      : "Desvantagens de investir em títulos públicos",
        difficulty : 1,
        lectureSize: 600000,
        seenAlready: true,
        stoppedAt: null,
        videoPath: null,
        lectureLogo: "/assets/images/learn/titulos/o_que_sao.svg"
      }),
      new Lecture({
        title      : "Tipos de títulos públicos",
        difficulty : 1,
        lectureSize: 1200000,
        seenAlready: false,
        stoppedAt: 600000,
        videoPath: null,
        lectureLogo: "/assets/images/learn/titulos/tipos.svg"
      }),
      new Lecture({
        title      : "Entendendo os Rendimentos dos Títulos Públicos",
        difficulty : 1,
        lectureSize: 1200000,
        seenAlready: false,
        stoppedAt: 600000,
        videoPath: null,
        lectureLogo: "/assets/images/learn/titulos/tipos.svg"
      })]

  }



}

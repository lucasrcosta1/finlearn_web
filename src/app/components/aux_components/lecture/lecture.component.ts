import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Lecture } from 'src/app/models/learn/topic/module/lecture/Lecture.model';
import { LearnService } from 'src/app/service/learn/learn.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent {

  lecture: Lecture| null = null;
  nextLectures: Lecture[] | null = null;
  dropdownActive = true;

  private module: UrlSegment[];


  constructor (
    private _router: Router,
    private _route: ActivatedRoute,
    private _learnService: LearnService,
  ) {
    
    this.module = this._route.snapshot.url;

  }

  async ngOnInit (): Promise<void> {

    const clickedModuleId = Number(this.module[2].path);
    const clickedLectureId = Number(this.module[3].path);
    this.lecture = await this._getLecture(clickedModuleId, clickedLectureId); 
    this.nextLectures = await this._getNextLectures(clickedModuleId, clickedLectureId);
    console.log(this.lecture);

  }

  /**
   * Go back to previous page.
   */
  goBack (): void {
    const route = `/${this.module[0]}/${this.module[1]}`;
    this._router.navigate([route]);
  }

  /**
   * Handle whheter dropdown should be open or closed.
   */
  handleDropdown (): void {

    this.dropdownActive = !this.dropdownActive;

  }

  goToPage (lectureId: number | null): void {

    if (lectureId != null) {

      const route = `/${this.module[0]}/${this.module[1]}/${this.module[2]}/${lectureId}`;
      window.location.replace(route);

    } else console.error("lectureid is null");
    

  }

  /**
   * Get actual lecture info.
   * @param moduleId 
   * @param lectureId 
   * @returns 
   */
  private async _getLecture (moduleId: number, lectureId: number): Promise<Lecture | null> {

    return this._learnService.getLecture(moduleId, lectureId);

  }

  /**
   * Get next 4 lecture's preview data.
   * @param moduleId 
   * @param lectureId 
   */
  private async _getNextLectures (moduleId: number, lectureId: number): Promise<Lecture[] | null> {

    return this._learnService.getNextLectures(moduleId, lectureId);

  }



}

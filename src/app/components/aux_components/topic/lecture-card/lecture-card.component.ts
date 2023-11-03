import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lecture } from 'src/app/models/learn/topic/module/lecture/Lecture.model';

@Component({
  selector: 'app-lecture-card',
  templateUrl: './lecture-card.component.html',
  styleUrls: ['./lecture-card.component.css']
})
export class LectureCardComponent {

  @Input()
  moduleId: number | null = null;
  @Input()
  lectures: Lecture[] | null = null;
  @Output()
  triggerLectureDesiredToBeWatched = new EventEmitter<{moduleId: number, lectureId: number}>();
  
  /**
   * Get difficulty level string.
   * @param level 
   * @returns 
   */
  getDifficultyLevel (level: number | null): string {

    if (level) return (level == 3) ? "Difícil" : ((level == 2) ? "Intermediário" : "Fácil");
    else return "Fácil";

  }

  /**
   * Open clicked lecture.
   * @param lecture 
   */
  openLecture (lecture: Lecture | null): void {

    if (lecture && lecture.id && this.moduleId) {
  
      this.triggerLectureDesiredToBeWatched.emit({moduleId: this.moduleId, lectureId: lecture.id});

    } else {

      console.error("Figure out a way to start from first lession");

    }

  }

}

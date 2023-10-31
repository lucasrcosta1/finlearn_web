import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lecture } from 'src/app/models/topic/module/lecture/Lecture.model';

@Component({
  selector: 'app-lecture-card',
  templateUrl: './lecture-card.component.html',
  styleUrls: ['./lecture-card.component.css']
})
export class LectureCardComponent {

  @Input()
  lectures: Lecture[] | null = null;
  @Output()
  triggerLectureDesiredToBeWatched = new EventEmitter<string>();

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

    if (lecture && lecture.title) {

      //Remove it once the back-end is implemented.
      localStorage.setItem("clickedLecture", JSON.stringify(lecture)); 
      //\Remove it once the back-end is implemented.
  
      this.triggerLectureDesiredToBeWatched.emit(lecture.title);

    } else {

      console.error("Figure out a way to start from first lession");

    }

  }

}

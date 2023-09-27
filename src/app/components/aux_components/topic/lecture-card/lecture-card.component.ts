import { Component, Input } from '@angular/core';
import { Lecture } from 'src/app/models/topic/module/lecture/Lecture.model';

@Component({
  selector: 'app-lecture-card',
  templateUrl: './lecture-card.component.html',
  styleUrls: ['./lecture-card.component.css']
})
export class LectureCardComponent {

  @Input()
  lectures: Lecture[] | null = null;

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
  openLecture (lecture): void {

    console.log("open lecture", lecture);
  }

}

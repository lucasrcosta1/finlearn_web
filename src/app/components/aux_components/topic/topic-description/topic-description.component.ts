import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lecture } from 'src/app/models/learn/topic/module/lecture/Lecture.model';
import { Topic } from 'src/app/models/learn/topic/Topic.model';

@Component({
  selector: 'app-topic-description',
  templateUrl: './topic-description.component.html',
  styleUrls: ['./topic-description.component.css']
})
export class TopicDescriptionComponent {

  @Input()
  topic: Topic | null = null;
  @Output()
  triggerLectureDesiredToBeWatched = new EventEmitter<{moduleId: number, lectureId: number}>();

  hide = true;
  learnMessage = "Saiba mais";

  /**
   * Handle learn more event.
   */
  learnMore (): void {

    const divElement = document.getElementById("module-description-div");
    const moduleDescription = document.querySelector('.module-description');
    if (divElement && moduleDescription && this.hide) {
      
      divElement.style.overflowY = "scroll";
      const moduleDescription = document.querySelector('.module-description');
      if (moduleDescription) moduleDescription.classList.add('hide-gradient');
      this.hide = false;
      this.learnMessage = "Saiba menos";
      
    } else if (divElement && moduleDescription && !this.hide) {
      
      divElement.style.overflowY = "hidden";
      moduleDescription.classList.remove('hide-gradient');
      moduleDescription.scrollTop = 0;
      this.hide = true;
      this.learnMessage = "Saiba mais";

    } else {

      console.error ("Error: Id or class not found");

    }

  }

  /**
   * Go to last class that user stoped watching.
   */
  continueClass (): void {

    if (this.topic) this._redirectToLastUsedClass(this.topic.stoppedModuleId, this.topic.stoppedLectureId);
    else console.error("Error: Module has no value.");

  }


  /**
   * Redirect to last watched class.
   * @param continueFrom 
   */
  private _redirectToLastUsedClass (moduleId: number | null, lectureId: number | null): void {

    if (!moduleId && !lectureId) {
      
      moduleId = 1;
      lectureId = 1;

    } 
    this.triggerLectureDesiredToBeWatched.emit({moduleId: moduleId!, lectureId: lectureId!});

  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lecture } from 'src/app/models/topic/module/lecture/Lecture.model';
import { Topic } from 'src/app/models/topic/Topic.model';

@Component({
  selector: 'app-topic-description',
  templateUrl: './topic-description.component.html',
  styleUrls: ['./topic-description.component.css']
})
export class TopicDescriptionComponent {

  @Input()
  topic: Topic | null = null;
  @Input()
  stoppedAt: Lecture | null = null;
  @Output()
  triggerLectureDesiredToBeWatched = new EventEmitter<string>();

  hide = true;

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
      
    } else if (divElement && moduleDescription && !this.hide) {
      
      divElement.style.overflowY = "hidden";
      moduleDescription.classList.remove('hide-gradient');
      moduleDescription.scrollTop = 0;
      this.hide = true;

    } else {

      console.error ("Error: Id or class not found");

    }

  }

  /**
   * Go to last class that user stoped watching.
   */
  continueClass (): void {

    if (this.topic) this._redirectToLastUsedClass(this.stoppedAt);
    else console.error("Error: Module has no value.");

  }


  /**
   * 
   * @param continueFrom 
   */
  private _redirectToLastUsedClass (continueFrom: Lecture | null): void {

    if (continueFrom && continueFrom.title) {

      //Remove it once the back-end is implemented.
      localStorage.setItem("clickedLecture", JSON.stringify(continueFrom)); 
      //\Remove it once the back-end is implemented.
  
      this.triggerLectureDesiredToBeWatched.emit(continueFrom.title);

    } else {

      console.error("Figure out a way to start from first lession");

    }

  }

}

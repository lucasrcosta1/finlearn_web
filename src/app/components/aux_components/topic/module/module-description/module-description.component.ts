import { Component, Input } from '@angular/core';
import { Lecture } from 'src/app/models/topic/module/lecture/Lecture.model';
import { StoppedAt } from 'src/app/models/topic/StoppedAt.model';
import { Topic } from 'src/app/models/topic/Topic.model';

@Component({
  selector: 'app-module-description',
  templateUrl: './module-description.component.html',
  styleUrls: ['./module-description.component.css']
})
export class ModuleDescriptionComponent {

  @Input()
  topic: Topic | null = null;
  @Input()
  stoppedAt: StoppedAt | null = null;

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

  private _redirectToLastUsedClass (continueFrom: StoppedAt | null): void {

    console.log("Should redirect user to the class in the last point it stopped", continueFrom);

  }

}

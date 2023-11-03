import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from 'src/app/models/learn/topic/Topic.model';
import { Module } from 'src/app/models/learn/topic/module/Module.model';

@Component({
  selector: 'app-module-accordeon',
  templateUrl: './module-accordeon.component.html',
  styleUrls: ['./module-accordeon.component.css']
})
export class ModuleAccordeonComponent {

  @Input()
  topic: Topic | null = null;
  @Output()
  triggerLectureDesiredToBeWatched = new EventEmitter<{moduleId: number, lectureId: number}>();

  expanded = false;

  constructor () {}

  /**
   * Expand clicked module.
   * @param module 
   */
  expandModule (module: Module, index: number): void {

    module.expanded = !module.expanded;

  }

  /**
   * Redirect to lecture.
   * @param clickedLecture 
   */
  redirectToLecture (clickedLecture: {moduleId: number, lectureId: number}): void {

    this.triggerLectureDesiredToBeWatched.emit(clickedLecture);

  }

}

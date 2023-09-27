import { Component, Input } from '@angular/core';
import { Topic } from 'src/app/models/topic/Topic.model';
import { Module } from 'src/app/models/topic/module/Module.model';

@Component({
  selector: 'app-module-accordeon',
  templateUrl: './module-accordeon.component.html',
  styleUrls: ['./module-accordeon.component.css']
})
export class ModuleAccordeonComponent {

  @Input()
  topic: Topic | null = null;

  expanded = false;

  constructor () {}

  /**
   * Expand clicked module.
   * @param module 
   */
  expandModule (module: Module, index: number): void {

    console.log(module, index);
    module.expanded = !module.expanded;

  }

}

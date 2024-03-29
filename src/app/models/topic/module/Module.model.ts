import { Lecture } from "./lecture/Lecture.model";

export class Module {

  title     : string | null;
  lectures  : Lecture[] | null;
  progress  : number | null;
  expanded  : boolean;

  /**
   * Constructor
   * @todo Shouldn't minutes be in ms instead of string?
   * @param module
   */
  constructor (module?: Module) {
    this.title    = module?.title     || null;
    this.lectures = module?.lectures  || null;
    this.progress = module?.progress  || null;
    this.expanded = module?.expanded  || false;
  }
}

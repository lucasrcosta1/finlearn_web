export class Tab {
  id        : number;
  classValue: string;
  link: string;
  label: string;
  active: boolean;


  /**
   * Constructor
   * @param class
   * @param link
   */
  constructor (id: number, classValue: string, link: string, label: string, active: boolean) {
    this.id = id;
    this.classValue = classValue;
    this.link = link;
    this.label = label;
    this.active = active;
  }
}

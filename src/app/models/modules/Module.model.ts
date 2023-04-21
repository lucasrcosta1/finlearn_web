export class Module {
  moduleName    : string;
  minutes       : string;
  imagePath     : string;

  /**
   * Constructor
   * @todo Shouldn't minutes be in ms instead of string?
   * @param module
   */
  constructor (moduleName: string, minutes: string, imagePath: string) {
    this.moduleName   = moduleName;
    this.minutes      = minutes;
    this.imagePath    = imagePath;
  }
}

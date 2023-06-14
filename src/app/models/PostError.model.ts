export class PostError {
  loc: string[];
  msg: string;
  type: string;

  constructor (
    loc: string[],
    msg: string,
    type: string
  ) {
    this.loc  = loc;
    this.msg  = msg;
    this.type = type;
  }
}

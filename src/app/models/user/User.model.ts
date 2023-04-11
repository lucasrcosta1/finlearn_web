export class User {
  id?       : number;
  name      : string;
  email     : string;
  password  : string;
  telephone : string;
  role      : string;

  constructor (user?: User) {
    this.name       = user?.name        || '';
    this.email      = user?.email       || '';
    this.password   = user?.password    || '';
    this.telephone  = user?.telephone   || '';
    this.role       = user?.role        || '';
  }
}

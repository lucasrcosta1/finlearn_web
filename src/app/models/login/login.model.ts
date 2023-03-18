export class Login {
  email   : string;
  password: string;

  /**
   * Constructor
   *
   * @param login
   */
  constructor (login?: Login) {
    this.email    = login?.email    || '';
    this.password = login?.password || '';
  }
}

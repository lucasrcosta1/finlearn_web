export class Suporte {
  email   : string;
  descricao: string;

  /**
   * Constructor
   *
   * @param suporte
   */
  constructor (suporte?: Suporte) {
    this.email    = suporte?.email    || '';
    this.descricao = suporte?.descricao || '';
  }
}

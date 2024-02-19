export class Article {
  #nom: string;
  #descripcio: string;
  #preu: number;

  constructor(nom: string = '', descripcio: string = '', preu: number = 0) {
    this.#nom = nom;
    this.#descripcio = descripcio;
    this.#preu = preu;
  }

  get nom(): string {
    return this.#nom;
  }
  get descripcio(): string {
    return this.#descripcio;
  }
  get preu(): number {
    return this.#preu;
  }

  set nom(nom: string) {
    this.#nom = nom;
  }
  set descripcio(descripcio: string) {
    this.#descripcio = descripcio;
  }
  set preu(preu: number) {
    this.#preu = preu;
  }

  toObject(): any {
    return {
      nom: this.#nom,
      descripcio: this.#descripcio,
      preu: this.#preu,
    };
  }
}

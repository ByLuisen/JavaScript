export class Producte {
  #nomImatge: string;
  #nomProducte: string;
  #descripcio: string;
  #preu: number;
  #disponibilitat: number;

  constructor(
    nomImatge: string = '',
    nomProducte: string = '',
    descripcio: string = '',
    preu: number = 0,
    disponibilitat: number = 0
  ) {
    this.#nomImatge = nomImatge;
    this.#nomProducte = nomProducte;
    this.#descripcio = descripcio;
    this.#preu = preu;
    this.#disponibilitat = disponibilitat;
  }

  get nomImatge(): string {
    return this.#nomImatge;
  }
  get nomProducte(): string {
    return this.#nomProducte;
  }
  get descripcio(): string {
    return this.#descripcio;
  }
  get preu(): number {
    return this.#preu;
  }
  get disponibilitat(): number {
    return this.#disponibilitat;
  }

  set nomImatge(nomImatge: string) {
    this.#nomImatge = nomImatge;
  }
  set nomProducte(nomProducte: string) {
    this.#nomProducte = nomProducte;
  }
  set descripcio(descripcio: string) {
    this.#descripcio = descripcio;
  }
  set preu(preu: number) {
    this.#preu = preu;
  }
  set disponibilitat(disponibilitat: number) {
    this.#disponibilitat = disponibilitat;
  }
  
  toObject(): any {
    return {
      nomImatge: this.#nomImatge,
      nomProducte: this.#nomProducte,
      descripcio: this.#descripcio,
      preu: this.#preu,
      disponibilitat: this.#disponibilitat
    };
  }
}

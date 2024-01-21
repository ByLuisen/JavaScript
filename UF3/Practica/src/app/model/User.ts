export class User {
  #nomUsuari: string;
  #contrasenya: string;
  #correuElectronic: string;
  #estatCivil: string;
  #sexe: string;
  #informacio: string;
  #condicions: boolean;

  constructor(
    nomUsuari: string,
    contrasenya: string,
    correuElectronic: string = '',
    estatCivil: string = '',
    sexe: string = '',
    informacio: string = '',
    condicions: boolean = true
  ) {
    this.#nomUsuari = nomUsuari;
    this.#contrasenya = contrasenya;
    this.#correuElectronic = correuElectronic;
    this.#estatCivil = estatCivil;
    this.#sexe = sexe;
    this.#informacio = informacio;
    this.#condicions = condicions;
  }

  get nomUsuari(): string {
    return this.#nomUsuari;
  }
  get contrasenya(): string {
    return this.#contrasenya;
  }
  get correuElectronic(): string {
    return this.#correuElectronic;
  }
  get estatCivil(): string {
    return this.#estatCivil;
  }
  get sexe(): string {
    return this.#sexe;
  }
  get informacio(): string {
    return this.#informacio;
  }
  get condicions(): boolean {
    return this.#condicions;
  }

  set nomUsuari(nomUsuari: string) {
    this.#nomUsuari = nomUsuari;
  }
  set contrasenya(contrasenya: string) {
    this.#contrasenya = contrasenya;
  }
  set correuElectronic(correuElectronic: string) {
    this.#correuElectronic = correuElectronic;
  }
  set estatCivil(estatCivil: string) {
    this.#estatCivil = estatCivil;
  }
  set sexe(sexe: string) {
    this.#sexe = sexe;
  }
  set informacio(informacio: string) {
    this.#informacio = informacio;
  }
  set condicions(condicions: boolean) {
    this.#condicions = condicions;
  }
  toObjectJS(): any {
    let myObject = {
      nomUsuari: this.#nomUsuari,
      contrasenya: this.#contrasenya,
      correuElectronic: this.#correuElectronic,
      estatCivil: this.#estatCivil,
      sexe: this.#sexe,
      informacio: this.#informacio,
      condicions: this.#condicions,
    };
    return myObject;
  }
}

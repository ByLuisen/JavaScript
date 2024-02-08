export class User {
  #nomUsuari: string;
  #correuElectronic: string;
  #fechaNacimiento: string;
  #edad: string;
  #informacio: string;

  constructor(
    nomUsuari: string,
    correuElectronic: string = '',
    fechaNacimiento: string = '',
    edad: string = '',
    informacio: string = ''
  ) {
    this.#nomUsuari = nomUsuari;
    this.#correuElectronic = correuElectronic;
    this.#fechaNacimiento = fechaNacimiento;
    this.#edad = edad;
    this.#informacio = informacio;
  }

  get nomUsuari(): string {
    return this.#nomUsuari;
  }
  get correuElectronic(): string {
    return this.#correuElectronic;
  }
  get fechaNacimiento(): string {
    return this.#fechaNacimiento;
  }
  get edad(): string {
    return this.#edad;
  }
  get informacio(): string {
    return this.#informacio;
  }

  set nomUsuari(nomUsuari: string) {
    this.#nomUsuari = nomUsuari;
  }
  set correuElectronic(correuElectronic: string) {
    this.#correuElectronic = correuElectronic;
  }
  set fechaNacimiento(fechaNacimiento: string) {
    this.#fechaNacimiento = fechaNacimiento;
  }
  set edad(edad: string) {
    this.#edad = edad;
  }
  set informacio(informacio: string) {
    this.#informacio = informacio;
  }
  
  // toJSON(): any {
  //   let myObject = {
  //     nomUsuari: this.#nomUsuari,
  //     contrasenya: this.#contrasenya,
  //     correuElectronic: this.#correuElectronic,
  //     estatCivil: this.#estatCivil,
  //     sexe: this.#sexe,
  //     informacio: this.#informacio,
  //     condicions: this.#condicions,
  //   };
  //   return myObject;
  // }
}

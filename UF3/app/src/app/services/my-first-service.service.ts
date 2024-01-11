import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//Utilidad 1:un servicio es la puerta d esalida de la aplicacion
//pueden haber muchos servicios, tantos como CRUD a tablas quiera hacer

//Utilidad 2:los servicios tambien me dejan compartir/acceder a valores comunes
//entre componentes

//Ejemplo de la segunda utilidad
//este servicio va a crear valores y las componentes van a acceder
export class MyFirstServiceService {
  constructor() {}
  createFruites(): string[] {
    let tipusFruits: string[] = ['poma', 'pera', 'taronja', 'banana'];
    let fruites: string[] = [];

    for (let i: number = 0; i < 1000; i++) {
      let j = Math.floor(Math.random() * 4);
      fruites.push(tipusFruits[j]); //array de frutas aleatorias entre las 3 de arriba
    }
    return fruites;
  }
}

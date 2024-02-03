import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class SincronService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private usuariSubject: BehaviorSubject<boolean>;
  usuario: Observable<boolean>; //part public del Behabiour Subject

  usuarios: User[] = [];

  constructor() {
    this.usuariSubject = new BehaviorSubject<boolean>(false); //estat inicial del BehaviorSubject
    this.usuario = this.usuariSubject.asObservable();
    this.initUsuarios();
  }

  initUsuarios(): void {
    for (let i = 0; i < 11; i++) {
      this.usuarios.push(new User('usuario' + i, 'pass' + i));
    }
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  usuariData(): boolean {
    return this.usuariSubject.value;
  }

  validateLogin(nombre: string, password: string) {
    //suposem que aquest mètode mira al servidor si hi és o no un usuari dins de la BBDD
    //recollim del servidor l'usuari sencer
    const usuarioEncontrado = this.usuarios.find(
      (usuario) =>
        usuario.nomUsuari == nombre && usuario.contrasenya == password
    );
    if (usuarioEncontrado) {
      this.usuariSubject.next(true);
      //creem al localStorge aquest valor
      localStorage.setItem('user', usuarioEncontrado.nomUsuari);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.usuariSubject.next(false);
  }
}

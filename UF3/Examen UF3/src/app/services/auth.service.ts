import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // Atributos de la clase
  private usuariSubject: BehaviorSubject<boolean>;
  usuario: Observable<boolean>;

  // Array de objetos User con todos nuestros usuarios
  usuarios: User[] = [
    new User('email1@gmail.com', '46994853B'),
    new User('email2@gmail.com', '46994853B'),
    new User('email3@gmail.com', '46994853B'),
    new User('email4@gmail.com', '46994853B'),
    new User('email5@gmail.com', '46994853B'),
    new User('email6@gmail.com', '46994853B'),
    new User('email7@gmail.com', '46994853B'),
    new User('email8@gmail.com', '46994853B'),
    new User('email9@gmail.com', '46994853B'),
    new User('email10@gmail.com', '46994853B'),
  ];

  constructor() {
    this.usuariSubject = new BehaviorSubject<boolean>(false); //estat inicial del BehaviorSubject como false
    this.usuario = this.usuariSubject.asObservable();// hacemos que el usuariSubject sea observable por los demas componentes
  }
  /**
   * Función que valida si los datos pasados por parametro són los de un usuario de nuestra aplicación.
   * @param nombre        El nombre del usuario.
   * @param password      La contraseña del usuario.
   * @returns             Devuelve true si es valido o false si no lo es.
   */
  validateLogin(nombre: string, password: string) {
    // Usamos la función find que devolvera true si existe el usuario o flase si no existe.
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.name == nombre && usuario.password == password
    );
    // Si el usuario existe
    if (usuarioEncontrado) {
      // Se cambia el valor a true de usuariSubject
      this.usuariSubject.next(true);
      // Se crea una localStorage de nombre user y valor el nombre del usuario
      localStorage.setItem('user', usuarioEncontrado.name);
      // Y al final devuelve true.
      return true;
    }
    // Si el usuario no existe devuelve false.
    return false;
  }

  /**
   * Función que elimina la LocalStorage user y canvai el valor de usuariSubject a false
   */
  logout() {
    localStorage.removeItem('user');
    this.usuariSubject.next(false);
  }
}

import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarios: User[] = [];

  constructor() {
    this.initUsuarios()
  }

  getUsuarios(): User[] {
    return this.usuarios;
  }

  initUsuarios(): void {
    for (let i = 0; i < 11; i++) {
      this.usuarios.push(new User('usuario' + i, 'email' + i + '@gmail.com'));
    }
  }

  validateUsers(user: User): boolean {
    return this.usuarios.some(
      (u) =>
        u.nomUsuari === user.nomUsuari && u.correuElectronic === user.correuElectronic
    );
  }

  actualizarUsuario(antiguoUsuario: User, nuevoUsuario: User) {
    let indice = this.usuarios.indexOf(antiguoUsuario);
    if (indice != -1) {
      this.usuarios[indice] = nuevoUsuario
    }
  }
}

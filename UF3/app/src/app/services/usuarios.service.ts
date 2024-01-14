import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarios: User[] = [];

  constructor() {
    this.initUsuarios();
  }
  private initUsuarios(): void {
    for (let i = 0; i < 301; i++) {
      this.usuarios.push(new User('usuario' + i, 'con' + i));
    }
  }

  validateUsers(user: User): boolean {
    return this.usuarios.some(
      (u) =>
        u.nomUsuari === user.nomUsuari && u.contrasenya === user.contrasenya
    );
  }
}

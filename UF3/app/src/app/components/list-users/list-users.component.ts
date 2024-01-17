import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})

export class ListUsersComponent {
  usuarios: User[] = [];
  constructor(private usuarioService: UsuariosService) {
    this.usuarios = this.usuarioService.usuarios;
  }
}

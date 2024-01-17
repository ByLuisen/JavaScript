import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  usuarios: User[] = [];
  usuarioAEditar!: User;

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
      this.usuarios = this.usuarioService.getUsuarios();
  }

  editarUsuario(usuario: User): void {
    this.usuarioAEditar = usuario;
  }
}

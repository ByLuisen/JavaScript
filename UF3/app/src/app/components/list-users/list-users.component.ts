import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  @ViewChild(EditarUsuarioComponent) child!: EditarUsuarioComponent;
  usuarios: User[] = [];
  usuarioAEditar!: User;
  usuarioEditado!: User;
  confirmar!: boolean;
  mensaje!: string;

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsuarios();
    this.usuarioAEditar = new User('', '');
    this.usuarioEditado = new User('', '');
    this.mensaje = '';
  }

  editarUsuario(usuario: User): void {
    this.mensaje = '';
    this.confirmar = false;
    this.usuarioAEditar = usuario;
  }

  processarInformacion(usuarioNuevo: User) {
    this.usuarioEditado = usuarioNuevo;
  }

  confirmarUsuario() {
    this.confirmar = true;
    this.usuarioService.actualizarUsuario(
      this.usuarioAEditar,
      this.usuarioEditado
    );
    this.mensaje = 'Gracias';
    this.usuarioAEditar = new User('', '');
    this.usuarioEditado = new User('', '');
  }
}

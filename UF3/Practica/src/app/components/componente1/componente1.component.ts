import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css'],
})
export class Componente1Component {
  // atributos de la clase
  login: FormGroup;
  newUser: User;
  mensaje: string;

  constructor(private usuarioService: UsuarioService) {
    this.login = new FormGroup({
      nomUsuari: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]{6,}$'),
      ]),
      contrasenya: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/),
      ]),
    });

    this.newUser = new User('', '');
    this.mensaje = '';
  }

  enviament(): void {
    this.newUser = new User(
      this.login.value.nomUsuari,
      this.login.value.contrasenya
    );

    if (this.usuarioService.validateUsers(this.newUser)) {
      this.mensaje = 'Usuario validado correctamente.';
    } else {
      this.mensaje = 'Error: Usuario no encontrado.';
    }
  }
}

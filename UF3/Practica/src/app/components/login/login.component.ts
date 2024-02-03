import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // atributos de la clase
  login: FormGroup;
  newUser: User;
  mensaje: string;
  //constructor
  constructor(private usuarioService: UsuariosService, private router: Router) {
    this.login = new FormGroup({
      nomUsuari: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]{6,}$'),
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
    });

    this.newUser = new User('', '');
    this.mensaje = '';
  }
  //envia el usuario
  enviament(): void {
    this.newUser = new User(
      this.login.value.nomUsuari,
      this.login.value.correo
    );
    //valida el usuario para crear la local storage y mostrar el mensaje de usuario
    if (this.usuarioService.validateUsers(this.newUser)) {
      localStorage.setItem('Logeado', 'true');
      this.router.navigate(['/quisom']);
    } else {
      this.mensaje = 'Error: Usuario no encontrado.';
    }
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-identificacio',
  templateUrl: './identificacio.component.html',
  styleUrls: ['./identificacio.component.css'],
})
export class IdentificacioComponent {
  // atributos de la clase
  login!: FormGroup;
  mensaje!: string;
  //constructor donde injectamos el servicio para validar el usuario y el Route para las rutas
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Creamos el FromGroup de nuestro formulario
    this.login = new FormGroup({
      // FormControl y Validaciones del campo email
      // El campo email és requerido y en formato email
      email: new FormControl('', [Validators.required, Validators.email]),
      // FormControl y Validaciones del campo dni
      dni: new FormControl('', [
        // Validación de que el campo dni sea requerido
        Validators.required,
        // Validación de que el campo dni tiene que coincidir con este patrón
        Validators.pattern(/^\d{8}[a-zA-Z]$/),
      ]),
    });

    // Inicializamos el atributo mensaje vacio
    this.mensaje = '';
  }

  /**
   * Cuando todos los datos del formulario son correctos ejecutamos esta función que
   * se encargara de enviar los datos a un servicio para validar-lo si son correctos o no
   */
  enviament(): void {
    this.mensaje = '';
    // Valida si el usuario es correcto pasandole el email y el dni
    // Si es valido la función creara una LocalStorage de nombre user y de valor el email
    if (this.auth.validateLogin(this.login.value.email, this.login.value.dni)) {
      // redirigira al usuario a la componente quisom
      this.router.navigate(['/quisom']);
      // Si no es valido se guradara un mensaje de error en la variable mensaje
    } else {
      this.mensaje = 'Error: Credenciales incorrectas.';
    }
  }

  /**
   * Funcion que redirije al usuario a la componente home
   */
  redirectHome(): void {
    this.router.navigate(['/home']);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; //importaciones obligatorias
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css'],
})
export class Componente3Component {
  estadosCiviles = ['Casado/a', 'Soltero/a', 'Divorciado/a'];
  intereses = ['Videojuegos', 'Accesorios', 'Novetats del mercat'];

  formUsuario = new FormGroup({
    nombreUsuario: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9]+$'),
    ]),
    confirmarContrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9]+$'),
    ]),
    correoElectronico: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    estadoCivil: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    informacion: new FormGroup({
      videojuegos: new FormControl(false),
      accesorios: new FormControl(false),
      novedadesMercado: new FormControl(false),
    }),
    aceptarCondiciones: new FormControl(false, [Validators.requiredTrue]),
  });

  get nombreUsuario() {
    return this.formUsuario.get('nombreUsuario');
  }

  get contrasena() {
    return this.formUsuario.get('contrasena');
  }

  get confirmarContrasena() {
    return this.formUsuario.get('confirmarContrasena');
  }

  get correoElectronico() {
    return this.formUsuario.get('correoElectronico');
  }

  get estadoCivil() {
    return this.formUsuario.get('estadoCivil');
  }

  get sexo() {
    return this.formUsuario.get('sexo');
  }

  get informacion() {
    return this.formUsuario.get('informacion');
  }

  get aceptarCondiciones() {
    return this.formUsuario.get('aceptarCondiciones');
  }

  submit() {
    if (this.formUsuario.valid) {
      console.log(
        'Formulario válido. Valores introducidos:',
        this.formUsuario.value
      );
    } else {
      console.log(
        'Formulario inválido. Por favor, revisa los campos marcados.'
      );
    }
  }
}

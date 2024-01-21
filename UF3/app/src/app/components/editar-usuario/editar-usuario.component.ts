import { Component, Input, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  @Input() usuario!: User;
  @Output() enviarInformacio = new EventEmitter<any>();
  nuevoUsuario!: User;
  login!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.login = new FormGroup({
      nomUsuari: new FormControl(this.usuario.nomUsuari, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]{6,}$'),
      ]),
      contrasenya: new FormControl(this.usuario.contrasenya, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/),
      ]),
    });
  }

  enviar(): void {
    this.nuevoUsuario = new User(
      this.login.value.nomUsuari,
      this.login.value.contrasenya
    );
    this.enviarInformacio.emit(this.nuevoUsuario);

  }
}

import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit{
  @Input() usuario!: User;
  mensaje!: string;
  login!: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      nomUsuari: new FormControl(this.usuario.nomUsuari, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]{6,}$')
      ]),
      contrasenya: new FormControl(this.usuario.contrasenya, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/),
      ]),
    });
  }

  enviament(): void {
  }
}

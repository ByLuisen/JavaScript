import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { SincronService } from 'src/app/services/sincron.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // atributos de la clase
  message!: string;
  login!: FormGroup;
  newUser!: User;
  mensaje!: string;
  //constructor
  constructor(private sincroService: SincronService, private router: Router) {}
  ngOnInit(): void {
    this.login = new FormGroup({
      nomUsuari: new FormControl('', [Validators.required]),
      contrasenya: new FormControl('', [Validators.required]),
    });

    this.newUser = new User('', '');
    this.mensaje = '';
  }
  //envia el usuario
  enviament(): void {
    //valida el usuario para crear la local storage y mostrar el mensaje de usuario
    if (
      this.sincroService.validateLogin(
        this.login.value.nomUsuari,
        this.login.value.contrasenya
      )
    ) {
      this.router.navigate(['/quisom']);
    } else {
      this.mensaje = 'Error: Credenciales incorrectas.';
    }
  }
}

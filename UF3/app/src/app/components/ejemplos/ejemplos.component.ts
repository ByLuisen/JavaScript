import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { CookieService } from 'ngx-cookie-service';
import { MyFirstServiceService } from 'src/app/services/my-first-service.service';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css'],
})
export class EjemplosComponent implements OnInit {
  //atributos de la clase (atributo publicos)
  //el simbolo ! porque inicializa fuera del constructor
  nombre!: string;
  edad!: number;
  frutas!: string[];
  arboles!: Array<string>;
  flag!: boolean;
  user!: User;
  misFrutas!: string[];

  //a partir de ahora usaremos el constructor
  //para llamar (=inyectar) a cookies, servicios,...
  constructor(
    private cookie: CookieService,
    private fruitesService: MyFirstServiceService
  ) {}

  //metodo que cambia el orden de carga
  //para usarlo viene asociado al implements
  ngOnInit(): void {
    this.nombre = 'Maite';
    this.edad = 20;
    this.frutas = ['pera', 'manzana'];
    this.arboles = ['peral', 'manzano'];
    this.flag = true;
    this.user = new User('', '', '', '', '', '', false);
    this.setCookie();
  }

  setCookie(): void {
    //creando una cookie de nombre clase y cuyo valor es DAW2
    //si no declaras el tiempo de expiración duraran el tiempo de la sesion
    this.cookie.set('clase', 'DAW2');
    this.cookie.set('mes', 'febrero');
    this.cookie.set('nombre', 'Luis');
    this.misFrutas = this.fruitesService.createFruites();
    console.log(this.misFrutas);
  }

  deleteACookie(): void {
    this.cookie.delete('clase');
  }

  deleteAllCookies(): void {
    this.cookie.deleteAll();
  }

  saludo() {
    alert('Hola');
  }
}

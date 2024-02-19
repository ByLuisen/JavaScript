import { Component, OnInit } from '@angular/core';
import { SincronService } from '../../../services/sincron.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  message!:string;
  isLogged!:boolean;

  constructor(private sincro: SincronService,private route:Router) {
    //1.- enterarme antes de cargar la
    // componente si estoy logueada
    this.sincro.usuario.subscribe(
      resultat => this.isLogged=resultat
    )
    //2.- Si no estoy logueada: redirecciono fuera
    if(!this.isLogged){
        this.route.navigate(["/compo2"])
    }
   }

  ngOnInit() {
    this.sincro.currentMessage.subscribe(message => this.message = message)
  }

}

import { Component } from '@angular/core';
import { User } from '../../model/User';
import { SincronService } from '../../../services/sincron.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isLogged:boolean=false;

  constructor(private sincro:SincronService, private route: Router){

    this.sincro.usuario.subscribe(
      resultat =>{
       this.isLogged=resultat;
      }

    )
    console.log(this.isLogged);
  }
  logout(){

    this.sincro.logout();
    this.route.navigate(["/compo2"]);
  }
}

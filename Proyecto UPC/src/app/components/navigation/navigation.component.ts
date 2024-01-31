import { Component } from '@angular/core';
import { User } from '../../model/User';
import { Router } from '@angular/router';
import { SincronService } from 'src/app/services/sincron.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isLogged: boolean = false;

  constructor(private sincro: SincronService, private route: Router) {
    this.sincro.usuario.subscribe((resultat) => {
      this.isLogged = resultat;
    });
  }
  logout() {
    this.sincro.logout();
    this.route.navigate(['/quisom']);
  }
}

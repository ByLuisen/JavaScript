import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private router: Router) {
    //borramos la local storage si le da a logout
    localStorage.removeItem('Logeado');
    //redirigimos al home
    this.router.navigate(['/quisom'])
  }
}

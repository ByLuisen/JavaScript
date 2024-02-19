import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-privada',
  templateUrl: './area-privada.component.html',
  styleUrls: ['./area-privada.component.css']
})
export class AreaPrivadaComponent {
  constructor (private router: Router) {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['/home']);
    }
  }
}

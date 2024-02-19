import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qui-som',
  templateUrl: './qui-som.component.html',
  styleUrls: ['./qui-som.component.css']
})
export class QuiSomComponent {
  constructor (private router: Router) {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['/home']);
    }
  }
}

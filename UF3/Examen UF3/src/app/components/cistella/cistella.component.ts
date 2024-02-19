import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent {
  constructor (private router: Router) {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['/home']);
    }
  }
}

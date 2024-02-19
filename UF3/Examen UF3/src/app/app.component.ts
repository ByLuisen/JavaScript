import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*
  logeado = localStorage.getItem('Logeado')
  */
  title = 'upc';
  hermes!: boolean;
  constructor(private cookieService: CookieService) {
    this.hermes = this.cookieService.check('hermes');
  }

  aceptarCookies(): void {
    this.cookieService.set('hermes', 'si');
    this.hermes = true;
  }
  rebutjarCookies(): void {
    this.hermes = true;
  }
}

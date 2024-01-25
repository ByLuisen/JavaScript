import { Component } from '@angular/core';
import { Producte } from 'src/app/model/Producte';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent {
  cesta: Producte[] = [];
  constructor(private cookieService: CookieService) {
    if (this.cookieService.check('cesta')) {
      this.cesta = JSON.parse(this.cookieService.get('cesta'));
    }
    console.log(this.cesta);
  }
}

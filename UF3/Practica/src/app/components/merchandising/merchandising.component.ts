import { Component, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Producte } from 'src/app/model/Producte';

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.css'],
})
export class MerchandisingComponent {
  cesta: Producte[];;
  //añadimos los 4 productos
  productos: Producte[] = [
    new Producte('producto1.jpg', 'Producto1', 'Descripción1', 10, 2),
    new Producte('producto2.jpg', 'Producto2', 'Descripción2', 10, 3),
    new Producte('producto3.jpg', 'Producto3', 'Descripción3', 10, 4),
    new Producte('producto4.jpg', 'Producto4', 'Descripción4', 10, 5),
  ];
  //constructor
  constructor(private cookieService: CookieService) {
    this.cesta = [];
  }
  //añadimos el producto
  afegirProducte(producto: Producte) {
    this.cesta.push(producto);
    this.cookieService.set('cesta', JSON.stringify(this.cesta));
    console.log(this.cesta)
  }
}

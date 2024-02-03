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
  precio: number = 0;
  mensaje!: string;
  constructor(private cookieService: CookieService) {
    if (this.cookieService.check('cesta')) {
      this.cesta = JSON.parse(this.cookieService.get('cesta'));
    }
    this.calcularPrecio();
  }

  calcularPrecio() {
    this.cesta.forEach((producto) => {
      this.precio += producto.preu * producto.quantitat;
    });
  }

  confirmarCompra() {
    this.mensaje = 'La teva compra a tingut éxit';
  }

  cancelarCompra() {
    this.cookieService.delete('cesta');
    window.location.reload();
  }
}

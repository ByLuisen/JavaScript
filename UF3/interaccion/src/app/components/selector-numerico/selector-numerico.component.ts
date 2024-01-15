import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css'],
})
export class SelectorNumericoComponent implements OnInit {
  // 3 atricutos de la clase selector numerico
  @Input() minimo: number = 1; // señalada como parametro
  @Input() maximo: number = 1; // señalada como parametro
  actual!: number; // es un atributo normal y corriente
  constructor() {}

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar(): void {
    if (this.actual < this.maximo) this.actual++;
  }

  decrementar(): void {
    if (this.actual > this.minimo) this.actual--;
  }

  fijar(v: number): void {
    if (v >= this.minimo && v <= this.maximo) this.actual = v;
  }
}

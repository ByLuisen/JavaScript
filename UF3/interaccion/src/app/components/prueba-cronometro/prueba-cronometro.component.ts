import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-cronometro',
  templateUrl: './prueba-cronometro.component.html',
  styleUrls: ['./prueba-cronometro.component.css']
})
export class PruebaCronometroComponent {
  mensaje='';

  actualizar(t: number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}

import { Component, ViewChild } from '@angular/core';
// necesito importar toda la componente hija
import { SelectorNumericoComponent } from '../selector-numerico/selector-numerico.component';

@Component({
  selector: 'app-panel-numeric',
  templateUrl: './panel-numeric.component.html',
  styleUrls: ['./panel-numeric.component.css']
})
export class PanelNumericComponent {
  @ViewChild('selector1') selector1!: SelectorNumericoComponent;
  @ViewChild('selector2') selector2!: SelectorNumericoComponent;

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }

}

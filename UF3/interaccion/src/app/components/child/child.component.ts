import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // Ejemplo 1: @Input
  // @Input() childMessage!: string;

  // Ejemplo 2: @ViewChild
  messageChild = 'Hello childalkdjfakfjdsñ';
}

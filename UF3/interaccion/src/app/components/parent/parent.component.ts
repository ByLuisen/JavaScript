import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  // atributo de la clase parent: Ejemplo @Input
  // parentMessage = "Message from parent"

  // ejemplo 2
  @ViewChild(ChildComponent) child!:ChildComponent;

  color: string = 'blue';
  messageParent: string = '';

  ngAfterViewInit(): void {
    this.messageParent = this.child.messageChild;
  }
}

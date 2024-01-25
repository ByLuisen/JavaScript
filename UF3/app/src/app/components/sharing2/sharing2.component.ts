import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sharing2',
  templateUrl: './sharing2.component.html',
  styleUrls: ['./sharing2.component.css'],
})
export class Sharing2Component implements OnInit {
  message!: string;
  constructor(private data: DataService) {}
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }
}

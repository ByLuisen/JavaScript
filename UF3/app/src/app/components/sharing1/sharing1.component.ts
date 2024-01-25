import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sharing1',
  templateUrl: './sharing1.component.html',
  styleUrls: ['./sharing1.component.css'],
})
export class Sharing1Component implements OnInit {
  message!: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
}

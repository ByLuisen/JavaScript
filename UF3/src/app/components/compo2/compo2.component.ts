import { Component, OnInit } from '@angular/core';
import { SincronService } from '../../../services/sincron.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {

  message!:string;
  fruits!:string[];
  p: number = 1;


  constructor(private sincro: SincronService) { }

  ngOnInit() {
    this.fruits=["melon", "sandia", "platano","melon", "sandia", "platano",
    "melon", "sandia", "platano", "melon", "sandia", "platano", "melon",
    "sandia", "platano", "melon", "sandia", "platano"]
    this.sincro.currentMessage.subscribe(message => this.message = message)
  }

}

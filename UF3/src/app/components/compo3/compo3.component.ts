import { Component, OnInit } from '@angular/core';
import { SincronService } from '../../../services/sincron.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component implements OnInit {

  message!:string;

  constructor(private sincro: SincronService,private router:Router) { }

  ngOnInit() {
    this.sincro.currentMessage.subscribe(message => this.message = message)
  }
  newMessage() {
    this.sincro.changeMessage('Hello from Sibling');
    }
  login(){
    this.sincro.validateLogin();
    this.router.navigate(['/compo1']);
  }

}

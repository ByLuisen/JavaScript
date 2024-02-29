import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SincronService } from 'src/app/services/sincron.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
})
export class SiblingComponent {
  message!: string;

  constructor(private sincro: SincronService, private router: Router) {}

  ngOnInit() {
    this.sincro.currentMessage.subscribe((message) => (this.message = message));
  }
  newMessage() {
    this.sincro.changeMessage('Hello from Sibling');
  }
  login() {
    this.sincro.validateLogin();
    this.router.navigate(['/quisom']);
  }
}

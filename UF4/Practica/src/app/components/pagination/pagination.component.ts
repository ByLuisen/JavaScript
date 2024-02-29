import { Component } from '@angular/core';
import { SincronService } from 'src/app/services/sincron.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  message!: string;
  fruits!: string[];
  p: number = 1;

  constructor(private sincro: SincronService) {}

  ngOnInit() {
    this.fruits = [
      'melon',
      'sandia',
      'platano',
      'melon',
      'sandia',
      'platano',
      'melon',
      'sandia',
      'platano',
      'melon',
      'sandia',
      'platano',
      'melon',
      'sandia',
      'platano',
      'melon',
      'sandia',
      'platano',
    ];
    this.sincro.currentMessage.subscribe((message) => (this.message = message));
  }
}

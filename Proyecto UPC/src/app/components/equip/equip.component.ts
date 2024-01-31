import { Component, OnInit } from '@angular/core';
import { SincronService } from 'src/app/services/sincron.service';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.css'],
})
export class EquipComponent implements OnInit {
  message!: boolean;

  constructor(private sincroService: SincronService) {}
  ngOnInit(): void {
    this.sincroService.usuario.subscribe(
      (message) => (this.message = message)
    );
  }
}

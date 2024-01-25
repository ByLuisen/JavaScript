import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.css']
})
export class EquipComponent implements OnInit {
  message!: string;

  constructor(private usuarioService: UsuariosService) {
  }
  ngOnInit(): void {

  
  this.usuarioService.currentMessage.subscribe(
    (message) => (this.message = message)
  );
}
}

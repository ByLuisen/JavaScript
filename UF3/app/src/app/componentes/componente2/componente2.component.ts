import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from  '@angular/forms';//importaciones obligatorias

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {

  formContacto=new FormGroup({
    nombre:new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    edad:new FormControl('',[
      Validators.required,
      Validators.pattern('^[0-9]+$')
    ]),
    email:new FormControl('',[
      Validators.required,
      //Validators.pattern('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/')
      Validators.email //<----es una validación muy débil
    ]
    )
   })
   submit(){

    console.log(this.formContacto.value.nombre)
   }
}

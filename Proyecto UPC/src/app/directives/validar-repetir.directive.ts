import { Directive, Input } from '@angular/core';

//afegir nosaltres:
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appValidarRepetir]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidarRepetirDirective,
      multi: true,
    },
  ],
})
export class ValidarRepetirDirective implements Validator {
  //recoge el valor que viene desde el formulario
  @Input('appValidarRepetir') correo1!: string;

  constructor() {
    //this.password1="";
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let repetirCorreo = control.value;
    let correoInicial = control.root.get(this.correo1); //valor pasado en "vivo en directo"

    //quan cometis l'error de no passar el patró...
    if (correoInicial != null && repetirCorreo != correoInicial.value) {
      return { custom: true }; //envio un flag que diu error
    }

    return null; //arribo si passem el patró
  }
}

import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
  selector: '[appValidarNom]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarNomDirective, multi: true }]

})
export class ValidarNomDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const patron = /^[a-zA-Z ]{6,}$/; //patron nombre

    //quan cometis l'error de no passar el patró...
    if (!patron.test(control.value)) {
      return { custom: true }; //envio un flag que diu error
    }

    return null;//arribo si passem el patró
  }

}

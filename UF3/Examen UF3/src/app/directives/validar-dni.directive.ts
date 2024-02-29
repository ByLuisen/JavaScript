import { UpperCasePipe } from '@angular/common';
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidarDNI]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarDNIDirective, multi: true }]
})

export class ValidarDNIDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    let lletra = control.value[8]?.toUpperCase();
    let num = control.value.slice(0, 8);
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    let residuo = num % 23;
    let letraBuena = letras[residuo];

    if (letraBuena == lletra) {
      return null;
    }

    return { custom: true }; //arribo si passem el patró
  }
}

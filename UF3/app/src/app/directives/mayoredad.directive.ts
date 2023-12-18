import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[mayorEdad]', //selector que hace de atributo, se coloca en el html
  providers: [{provide: NG_VALIDATORS,
    useExisting: MayoredadDirective, //el nombre de la class de este archivo
    multi: true}]
})
export class MayoredadDirective implements Validator {
  constructor() { }


  validate(control: AbstractControl): ValidationErrors|null {
    let validar:boolean=false;
    //codi de la meva validació
    if(control.value>=18){ //la condició que fa que el valor del control estigui OK
      validar=true;
    }

    return validar?null:{'custom': true};
  }


}

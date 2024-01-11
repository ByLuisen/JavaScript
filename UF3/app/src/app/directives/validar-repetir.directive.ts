import { Directive, Input} from '@angular/core';

//afegir nosaltres:
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appValidarRepetir]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarRepetirDirective, multi: true }]
})
export class ValidarRepetirDirective implements Validator {

  //recoge el valor que viene desde el formulario
  @Input('appValidarRepetir') password1!:string;

  constructor() {
    //this.password1="";
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

  console.log(control.value);//el valor del control repetir contrasenya

   let repetirPassword=control.value;
   let passwordInicial= control.root.get(this.password1);//valor pasado en "vivo en directo"

   console.log( passwordInicial); //camp de contrasenya. És un objcte


    //quan cometis l'error de no passar el patró...
    if (passwordInicial!=null && repetirPassword != passwordInicial.value) {
      return { custom: true }; //envio un flag que diu error
    }

    return null;//arribo si passem el patró
  }

}

import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  //propietats de la classe
  maxDate!: string;
  minDate!: string;
  formulari: FormGroup;
  opciones: string[];
  newUser!: User;
  today: Date;
  //constructor
  constructor() {
    this.formulari = new FormGroup({
      //validaciones
      nomUsuari: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[a-zA-Z]{6,}$')
      ]),
      confirmarCorreo: new FormControl('', [Validators.required]),
      correuElectronic: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      ]),
      opciones: new FormControl('', [Validators.required]),
      edad: new FormControl(''),
      fechaNacimiento: new FormControl('', [Validators.required]),
    });

    this.opciones = ['Si', 'No', 'NS/NC'];
    this.today = new Date();
    this.newUser = new User('', '');
    this.setMinMaxDate();
  }
  /**
   * Función calcular edad
   */
  calcularEdad(): void {
    const nacimiento = new Date(this.formulari.value.fechaNacimiento);
    let edad = this.today.getFullYear() - nacimiento.getFullYear();
    if (
      this.today.getMonth() < nacimiento.getMonth() ||
      (this.today.getMonth() === nacimiento.getMonth() &&
        this.today.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }
    this.formulari.get('edad')?.patchValue(edad);
  }
  /**
   * Envia los datos para crear un nuevo Usuario
   */
  enviament(): void {
    this.newUser = new User(
      this.formulari.value.nomUsuari,
      this.formulari.value.correuElectronic,
      this.formulari.value.fechaNacimiento,
      this.formulari.value.edad,
      this.formulari.value.opciones
    );

    // console.log(this.newUser);
    // localStorage.setItem('firstName', 'Sara');
  }

  setMinMaxDate() {
    let fechaHoy = new Date();
    this.maxDate = fechaHoy.toISOString().split('T')[0];
    fechaHoy.setFullYear(fechaHoy.getFullYear() - 18);
    this.minDate = fechaHoy.toISOString().split('T')[0];
  }
}

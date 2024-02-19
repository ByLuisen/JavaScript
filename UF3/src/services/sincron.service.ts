import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../app/model/User';

@Injectable({
  providedIn: 'root'
})
export class SincronService {


  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private usuariSubject: BehaviorSubject<boolean>;
  usuario:Observable<boolean>;//part public del Behabiour Subject


  constructor() {

    this.usuariSubject= new BehaviorSubject<boolean>(false);//estat inicial del BehaviorSubject
    this.usuario=this.usuariSubject.asObservable();
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  usuariData():boolean{
    return this.usuariSubject.value;
  }
  validateLogin(){
    this.usuariSubject.next(true)
    //suposem que aquest mètode mira al servidor si hi és o no un usuari dins de la BBDD
    //recollim del servidor l'usuari sencer
    let u:User=new User("Marta", "123","marta@exemple.com","solter/a","Dona","Videojocs", true);
    //creem al localStorge aquest valor
    localStorage.setItem("user",u.nomUsuari);
    //enviem un OK a tothom




  }
  logout(){
        this.usuariSubject.next(false);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ValidarNomDirective } from './directives/validar-nom.directive';
import { ValidarEmailDirective } from './directives/validar-email.directive';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ValidarRepetirDirective } from './directives/validar-repetir.directive';
import { CookieService } from 'ngx-cookie-service';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidarEmailDirective,
    FormComponent,
    ValidarNomDirective,
    NotfoundComponent,
    ValidarRepetirDirective,
    EjemplosComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}

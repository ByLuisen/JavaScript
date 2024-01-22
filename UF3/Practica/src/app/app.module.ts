import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuisomComponent } from './components/quisom/quisom.component';
import { EquipComponent } from './components/equip/equip.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ValidarNomDirective } from './directives/validar-nom.directive';
import { ValidarRepetirDirective } from './directives/validar-repetir.directive';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MerchandisingComponent } from './components/merchandising/merchandising.component';
import { CompraComponent } from './components/compra/compra.component';

@NgModule({
  declarations: [AppComponent, QuisomComponent, EquipComponent, RegistroComponent, ValidarNomDirective, ValidarRepetirDirective, LoginComponent, NotfoundComponent, LogoutComponent, MerchandisingComponent, CompraComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

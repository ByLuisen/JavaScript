import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
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
import { Compo2Component } from './components/compo2/compo2.component';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo3Component } from './components/compo3/compo3.component';

@NgModule({
  declarations: [
    AppComponent,
    QuisomComponent,
    EquipComponent,
    RegistroComponent,
    ValidarNomDirective,
    ValidarRepetirDirective,
    LoginComponent,
    NotfoundComponent,
    LogoutComponent,
    MerchandisingComponent,
    CompraComponent,
    Compo1Component,
    Compo2Component,
    Compo3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

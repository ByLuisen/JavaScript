import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SubscripcioComponent } from './components/subscripcio/subscripcio.component';
import { HomeComponent } from './components/home/home.component';
import { IdentificacioComponent } from './components/identificacio/identificacio.component';
import { ValidarDNIDirective } from './directives/validar-dni.directive';
import { QuiSomComponent } from './components/qui-som/qui-som.component';
import { ColeccionsComponent } from './components/coleccions/coleccions.component';
import { CistellaComponent } from './components/cistella/cistella.component';
import { AreaPrivadaComponent } from './components/area-privada/area-privada.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    NavigationComponent,
    SubscripcioComponent,
    HomeComponent,
    IdentificacioComponent,
    ValidarDNIDirective,
    QuiSomComponent,
    ColeccionsComponent,
    CistellaComponent,
    AreaPrivadaComponent,
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

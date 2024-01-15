import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { JuegoComponent } from './components/juego/juego.component';
import { DadoComponent } from './components/dado/dado.component';
import { PanelNumericComponent } from './components/panel-numeric/panel-numeric.component';
import { SelectorNumericoComponent } from './components/selector-numerico/selector-numerico.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    JuegoComponent,
    DadoComponent,
    PanelNumericComponent,
    SelectorNumericoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

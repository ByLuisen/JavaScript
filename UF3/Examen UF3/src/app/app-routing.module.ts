import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { SubscripcioComponent } from './components/subscripcio/subscripcio.component';
import { IdentificacioComponent } from './components/identificacio/identificacio.component';
import { QuiSomComponent } from './components/qui-som/qui-som.component';
import { ColeccionsComponent } from './components/coleccions/coleccions.component';
import { CistellaComponent } from './components/cistella/cistella.component';
import { AreaPrivadaComponent } from './components/area-privada/area-privada.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'suscripcio', component: SubscripcioComponent},
  {path: 'identificar', component: IdentificacioComponent},
  {path: 'quisom', component: QuiSomComponent},
  {path: 'coleccions', component: ColeccionsComponent},
  {path: 'cistella', component: CistellaComponent},
  {path: 'area-privada', component: AreaPrivadaComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', component: NotfoundComponent} //la darrera!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

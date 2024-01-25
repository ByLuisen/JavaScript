import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuisomComponent } from './components/quisom/quisom.component';
import { EquipComponent } from './components/equip/equip.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MerchandisingComponent } from './components/merchandising/merchandising.component';
import { CompraComponent } from './components/compra/compra.component';

const routes: Routes = [
  {path: 'quisom', component: QuisomComponent},
  {path: 'equip', component: EquipComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'merchandising', component: MerchandisingComponent},
  {path: 'compra', component: CompraComponent},
  {path: '', redirectTo:'/quisom', pathMatch:'full'},
  {path: '**', component: NotfoundComponent} //la darrera!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

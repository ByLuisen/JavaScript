import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: 'formulari', component: FormComponent},
  {path: 'ejemplos', component: EjemplosComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/formulari', pathMatch:'full'},
  {path: '**', component: NotfoundComponent} //la darrera!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

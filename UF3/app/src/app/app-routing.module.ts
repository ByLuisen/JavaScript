import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { ListUsersComponent } from './components/list-users/list-users.component';


const routes: Routes = [
  {path: 'formulari', component: FormComponent},
  {path: 'ejemplos', component: EjemplosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-users', component: ListUsersComponent},
  {path: '', redirectTo:'/formulari', pathMatch:'full'},
  {path: '**', component: NotfoundComponent} //la darrera!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

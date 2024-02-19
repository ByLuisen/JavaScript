import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { Compo3Component } from './components/compo3/compo3.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


  const routes: Routes = [
    {path: 'compo1', component: Compo1Component},
    {path: 'compo2', component: Compo2Component},
    {path: 'compo3', component: Compo3Component},

    {path: '', redirectTo:'/compo1', pathMatch:'full'},
    {path: '**', component: NotFoundComponent} //la darrera!!!
  ];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

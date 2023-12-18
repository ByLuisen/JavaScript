import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { Componente3Component } from './componentes/componente3/componente3.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'first', component: Componente1Component },
  { path: 'second', component: Componente2Component },
  { path: 'third', component: Componente3Component },
  { path: '', redirectTo:'/second', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

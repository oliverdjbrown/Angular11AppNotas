import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleNotasComponent } from './detalle-notas/detalle-notas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  { path: 'notas', component: NotasComponent },
  { path: 'notas-detalle', component: DetalleNotasComponent },
  { path: '', redirectTo: '/notas', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

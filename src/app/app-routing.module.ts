import { ReporteComponent } from './reporte/reporte.component';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleNotasComponent } from './detalle-notas/detalle-notas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'crear-nota', component: CrearNotaComponent },
  { path: 'nota-detalle/:parametro', component: DetalleNotasComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

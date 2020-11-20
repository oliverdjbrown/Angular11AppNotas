import { ReporteComponent } from './components/reporte/reporte.component';
import { CrearNotaComponent } from './components/crear-nota/crear-nota.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleNotasComponent } from './components/detalle-notas/detalle-notas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotasComponent } from './components/notas/notas.component';

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

import { UsuariosService } from './usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppNotas';

  usuarioLogueado = false;

  constructor(private usuarioServicio: UsuariosService){}

  loginStatus(status: boolean){
     this.usuarioLogueado = status;
     this.usuarioServicio.usuarioLogueado = status;
  }

}

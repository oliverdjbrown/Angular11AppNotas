import { UsuariosService } from './../usuarios.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() loginStatus = new EventEmitter<boolean>();
  privilegio = false;
  user = '';

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  closeSesion(){
    const resultado = confirm('Presiona un boton');
    if (resultado === true) {
      this.loginStatus.emit(false);
      this.usuariosService.usuarioLogueado = false;
      this.usuariosService.privilegio = false;
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.user = this.usuariosService.nombreUsuario;
    this.privilegio = this.usuariosService.privilegio;
  }

}

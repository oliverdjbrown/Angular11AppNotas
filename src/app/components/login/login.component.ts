import { UsuariosService } from './../../Services/usuarios.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginStatus = new EventEmitter<boolean>();

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  Login(user: string, pass: string): void{
    this.usuariosService.usuarioLogueado = this.usuariosService.validarUsuario(user, pass);
    if(this.usuariosService.usuarioLogueado === true) {
      this.loginStatus.emit(true);
      this.router.navigate(['/notas']);
    }
    else {
      alert('Usuario o contraseña incorrecto');
    }
  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

   usuarios = [
    {
      id: '1',
      usuario: 'user',
      password: '1234',
      privilegio: 'false'
    },
    {
      id: '2',
      usuario: 'admin',
      password: '1234',
      privilegio: 'true'
    },
  ];

  nombreUsuario = '';
  usuarioLogueado = false;
  privilegio = false;

  validarUsuario(user: string, pass: string){
     if (this.usuarios.find(u => u.usuario === user) && this.usuarios.find(p => p.password === pass)){
      this.usuarioLogueado = true;
      if(this.usuarios.find(u => u.privilegio === 'administrator')){
        this.privilegio = true;
      }
      return true;
     } else {
      return false;
     }
  }

  constructor() { }
}

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
      privilegio: 'user'
    },
    {
      id: '2',
      usuario: 'admin',
      password: '1234',
      privilegio: 'administrator'
    },
  ];

  nombreUsuario = '';
  usuarioLogueado = false;
  privilegio = false;


  validarUsuario(user: string, pass: string): boolean{
     if (this.usuarios.find(u => u.usuario === user) && this.usuarios.find(p => p.password === pass)){
      this.usuarioLogueado = true;
      this.nombreUsuario = String(this.usuarios.find(u => u.usuario === user)?.usuario);
      this.validarPrivilegio(user);
      return true;
     } else {
      return false;
     }
  }

  validarPrivilegio(user: string): void{
    const privilegios = String(this.usuarios.find(u => u.usuario === user)?.privilegio);
    if(privilegios === 'administrator'){
      this.privilegio = true;
    } else{
      this.privilegio = false;
    }
  }
}

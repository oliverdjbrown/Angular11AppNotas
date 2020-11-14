import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppNotas';

  loggedIn = false;
  usuario = '';

  loginStatus(status: boolean){
    this.loggedIn = status;
  }
  updateName(user: any){
    this.usuario = user;
  }
}

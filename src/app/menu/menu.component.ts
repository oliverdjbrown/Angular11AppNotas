import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() loginStatus = new EventEmitter<boolean>();

  closeSesion(){
    const resultado = confirm('Presiona un boton');
    if (resultado === true) {
      this.loginStatus.emit(false);
      this.router.navigate(['/login']);
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

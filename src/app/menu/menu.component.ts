import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  closeSesion(){
    const resultado = confirm('Presiona un boton');
    if (resultado === true) {
      this.router.navigate(['/login']);
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

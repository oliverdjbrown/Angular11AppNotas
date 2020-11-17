import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent implements OnInit {

  constructor(private router: Router) { }

  guardar(){
    alert('Nota guardada');
    this.router.navigate(['/notas']);
  }

  ngOnInit(): void {
  }

}

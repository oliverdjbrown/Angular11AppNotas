import { notas } from './../../notas';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent implements OnInit {

  constructor(private router: Router) { }

  guardar(title: string, detail: string): void{
    notas.push({
      id: String(notas.length + 1),
      titulo: title,
      fecha: String(Date().slice(+6)),
      detalle: detail
    });
    this.router.navigate(['/notas']);
  }

  ngOnInit(): void {
  }

}

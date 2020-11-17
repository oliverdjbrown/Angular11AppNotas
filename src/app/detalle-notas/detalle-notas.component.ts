import { notas } from './../notas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-notas',
  templateUrl: './detalle-notas.component.html',
  styleUrls: ['./detalle-notas.component.css']
})
export class DetalleNotasComponent implements OnInit {

  idNota = '';
  titulo = '';
  detalle = '';

  constructor(private router: Router, private rutaActiva: ActivatedRoute) { }

  guardar(){
    alert('Nota guardada');
    this.router.navigate(['/notas']);
  }

  ngOnInit(): void {
    this.idNota =  this.rutaActiva.snapshot.params.parametro;
    this.titulo = String(notas.find(i => i.id === this.idNota)?.titulo);
    this.detalle = String(notas.find(i => i.id === this.idNota)?.detalle);
  }

}

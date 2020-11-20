import { notas } from './../../notas';
import { Component, OnInit } from '@angular/core';
import * as printJS from 'print-js';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  notas = notas;

  constructor() { }

  imprimir(): void{
    printJS({printable: notas, properties: ['id', 'titulo', 'fecha', 'detalle'], type: 'json', gridHeaderStyle: 'color: black;  border: 1px solid #3971A5;',
    gridStyle: 'border: 1px solid #3971A5;'});
  }

  ngOnInit(): void {
  }

}

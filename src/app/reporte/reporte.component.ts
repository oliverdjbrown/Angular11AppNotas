import { Component, OnInit } from '@angular/core';
import * as printJS from 'print-js';
import { notas } from '../notas';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  notas = notas;

  constructor() { }

  imprimir(){
    printJS({printable: notas, properties: ['id', 'titulo', 'fecha', 'detalle'], type: 'json', gridHeaderStyle: 'color: black;  border: 1px solid #3971A5;',
    gridStyle: 'border: 1px solid #3971A5;'});
  }

  ngOnInit(): void {
  }

}

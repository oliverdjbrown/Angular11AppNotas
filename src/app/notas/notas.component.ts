import { notas } from './../notas';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas = notas;
  shareCounter = 0;

 share(){
    this.shareCounter += 1;
    alert('Has compartido este contenido: ' + this.shareCounter);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

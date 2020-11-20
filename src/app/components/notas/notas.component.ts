import { NotasI } from './../../Models/notas.interface';
import { NotasCrudService } from './../../Services/notas.crud.service';
import { notas } from './../../notas';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  // facke Data
  // notas = notas;
  shareCounter = 0;
  // Real Data From Api
  dataNotas: NotasI[] = [];

  constructor(private notasSvc: NotasCrudService) { }

  getNotas(): void {
    this.notasSvc.GetNotas().subscribe(data => (this.dataNotas = data));
  }

  share(): void{
    this.shareCounter += 1;
    alert('Has compartido este contenido: ' + this.shareCounter);
  }

  ngOnInit(): void {
    this.getNotas();
  }

}

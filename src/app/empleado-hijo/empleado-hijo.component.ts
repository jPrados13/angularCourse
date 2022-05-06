import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  arrayCaract = [""];

  addCaract(caract:string){
    this.arrayCaract.push(caract);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

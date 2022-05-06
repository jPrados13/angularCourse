import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caract-empleado',
  templateUrl: './caract-empleado.component.html',
  styleUrls: ['./caract-empleado.component.css']
})
export class CaractEmpleadoComponent implements OnInit {

  @Output() caractEmpleado = new EventEmitter<string>();


  addCarac(value: string){
    //this.miServicio.muestraMensaje("Caracteristica añadida " + value);
    this.caractEmpleado.emit(value);
  }

  //constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

}

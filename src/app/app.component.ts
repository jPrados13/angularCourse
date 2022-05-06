import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadoService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadoService){
    this.empleados=this.empleadoService.empleados;
  }

  mensaje = "";
  registrado = false;
  nombre: string = "";
  apellido: string = "";
  
  empleados:Empleado[];
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  addEmpleado(): void {
    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   // this.miServicio.muestraMensaje("Nombre del empleado: "+this.cuadroNombre);
    this.empleadoService.addEmpleadoService(empleado);

  }

 

}

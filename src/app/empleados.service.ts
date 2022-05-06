import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadoService{

    constructor(private serviceAlert:ServicioEmpleadosService){}

    empleados: Empleado[] = [
        new Empleado("Juan", "Diaz", "Presi", 100000),
        new Empleado("Marta", "Sanz", "VicePresi", 75000),
        new Empleado("Alba", "Perez", "Gerente", 45000),
        new Empleado("Pepe", "Dorma", "Empleado", 25000)
      ];

      addEmpleadoService(empleado:Empleado){
          this.serviceAlert.muestraMensaje("Agregando: "+empleado.nombre)
        this.empleados.push(empleado);
      }
}
import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css']
})
export class DetallesempleadoComponent implements OnInit {

  constructor(private _services: EmpleadosService, private _activateRoute: ActivatedRoute) { }
  public id !: number;
  public empleado!: Empleado;
  ngOnInit(): void {
    this._activateRoute.params.subscribe((idEmpleado: Params) => {
      if (idEmpleado['idEmpleado'] != null) {
        this.id = idEmpleado['idEmpleado'];
        this._services.getDetallesEmpleado(this.id).subscribe(res=>{
          this.empleado = res;
        })
      }
    })
  }

}

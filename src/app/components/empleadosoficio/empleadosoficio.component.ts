import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/app/models/empleado';
@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
@ViewChild("selectoficio") selectoficio!: ElementRef
public oficios!: Array<string>;
public empleados!: Array<Empleado>
  constructor(private _service:EmpleadosService) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(res=>{
      this.oficios = res;
    })
  }
  buscarEmpleadosOficio():void {
    var oficio = this.selectoficio.nativeElement.value;
    this._service.getEmpleadosOficio(oficio).subscribe(res=>{
      this.empleados = res;
      console.log(this.empleados);
    })
  }
}

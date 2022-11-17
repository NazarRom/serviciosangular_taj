import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';
@Component({
  selector: 'app-empleadosplantilla',
  templateUrl: './empleadosplantilla.component.html',
  styleUrls: ['./empleadosplantilla.component.css']
})
export class EmpleadosplantillaComponent implements OnInit {

  @ViewChild("cajafuncion") cajaFuncion!: ElementRef;
  public funcion!: Array<string>;


  public plantilla!: Array<Plantilla>;
  constructor(private _service: PlantillaService) { }

  ngOnInit(): void {
    this.mostrarPlantilla();
    this.mostrarSelect();
  }
  mostrarPlantilla(): void {
    this._service.getPlantilla().subscribe(res => {
      this.plantilla = res;
    });
  }
  mostrarSelect(): void {
    this._service.getPlantillaSelect().subscribe(res => {
      this.funcion = res;
    });
  }

  //  mostrarFuncion():void{
  //   // var funcion = this.cajaFuncion.nativeElement.value
  //   // this._service.getFuncion(funcion).subscribe(res=>{
  //   //   this.plantilla = res;
  //   //})
  //  }

  mostrarFuncionMultiple(): void {
    var seleccionados = new Array<string>;
    for (var option of this.cajaFuncion.nativeElement.options) {
      if (option.selected == true) {
        seleccionados.push(option.value)
      }
    }
    this._service.getFuncionMultiple(seleccionados).subscribe(res => {
      this.plantilla = res;
    });
    console.log(seleccionados)
  }
}

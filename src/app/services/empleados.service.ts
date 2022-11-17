import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class EmpleadosService{
    constructor(private _http:HttpClient){}
    getEmpleados(): Observable<any> {
        var request = "/api/empleados";
        var url = environment.urlApiEmpleados + request;
        return this._http.get(url);
    }

    getEmpleadossalario(salario:string): Observable<any>{
        var request = "/api/empleados/empleadossalario/" + salario;
        var url = environment.urlApiEmpleados + request;
        return this._http.get(url);
    }

    
}
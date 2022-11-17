import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable()
export class PlantillaService {
constructor(private _http: HttpClient){}

getPlantilla():Observable<any>{
    var request = "/api/Plantilla";
    var url = environment.urlApiPlantilla + request;
    return this._http.get(url);
}

getPlantillaSelect():Observable<any>{
    var request = "/api/Plantilla/Funciones";
    var url = environment.urlApiPlantilla + request;
    return this._http.get(url);
}

// getFuncion(funcion:string):Observable<any>{
//     var request = "/api/Plantilla/PlantillaFuncion/" + funcion;
//     var url = environment.urlApiPlantilla + request
//     return this._http.get(url);
// }
 getFuncionMultiple(funciones:Array<any>):Observable<any>
 {
    var data ="";
    for (var funcion of funciones){
        data+= "funcion=" + funcion + "&";
    }
    data = data.substring(0,data.length -1);
    console.log(data)
    var request = "/api/Plantilla/PlantillaFunciones?" + data;
    var url = environment.urlApiPlantilla + request;
    return this._http.get(url);
}
}
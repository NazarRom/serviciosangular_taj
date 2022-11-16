import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable()
export class PersonaService {
    //en el constructor recibimos el objeto
    //http client
    constructor(private _http: HttpClient) {

    }

    getPersonas(): Promise<any> {
        var request = "api/personas";
        var url = environment.urlApiPersonas + request;
        //tenemos 2 formas de hacerlo
        //1)Como en Vue: crear una promesa aqui y devolver resolve
        //en promesas es Promise<any>
        let promise = new Promise((resolve)=>{
            this._http.get(url).subscribe(response =>{
                resolve(response)
            })
        })
        return promise;

        //2)devolver directamente la promesa de la peticion
        //para que lo resuelva el component
        //en observable es Observable<any>
       // return this._http.get(url);
    }
}
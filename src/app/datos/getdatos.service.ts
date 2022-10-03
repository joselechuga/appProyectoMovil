import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdatosService {

  urlapi = 'https://jsonplaceholder.typicode.com/users'

  constructor(public _http:HttpClient) { }


 obtenerDatos(){
  return this._http.get('https://jsonplaceholder.typicode.com/photos');
 }

  
}


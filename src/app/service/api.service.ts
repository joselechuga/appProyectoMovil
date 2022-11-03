import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rutaBase: string = 'https://fer-sepulveda.cl/API_PRUEBA2/api-service.php';
  

  constructor(private http: HttpClient,private router: Router) { }
  validador: boolean = false;
  canActivate() {
    if(this.validador) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  usuarioAlmacenar(correo,contrasena,nombre,apellido){
    let that = this;
    return new Promise(resolve => {
      resolve(that.http.post(that.rutaBase, {
        nombreFuncion: 'UsuarioAlmacenar',
        parametros: [correo,contrasena,nombre,apellido]
      }).toPromise())
    })
  }
  usuarioLogin(correo, contrasena){
    let that = this;
    return new Promise( resolve => {
      resolve(that.http.post(that.rutaBase,{
        nombreFuncion: 'UsuarioLogin',
        parametros: [correo, contrasena]
      }).toPromise())
    })
  }
  usuarioObtenerNombre(){
    let that = this;
    const user = JSON.parse(localStorage.getItem('usuario')).user
    return new Promise( resolve => {
      resolve(that.http.get(that.rutaBase 
        + '?nombreFuncion=UsuarioObtenerNombre&correo='+user).toPromise())
    })
  }
  usuarioModificarContrasena(correo, contrasenaNueva, contrasenaActual){
    let that = this;
    return new Promise( resolve => {
      resolve(that.http.patch(that.rutaBase,{
        nombreFuncion: 'UsuarioModificarContrasena',
        parametros: [correo, contrasenaNueva, contrasenaActual]
      }).toPromise())
    })
  }
}

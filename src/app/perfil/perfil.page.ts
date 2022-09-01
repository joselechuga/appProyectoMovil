import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }
  
  mostrar(){
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    let datosUsuario = [{}];

    for(var user in usuario){
      datosUsuario.push(usuario[user]);
      //console.log(usuario[user]);
    }
    console.log(datosUsuario[1]);
    
    
    /**
    var a = {
      b : datosUsuario[1]
    }
    console.log(a);
 */
  }


  ngOnInit() {
  }

}

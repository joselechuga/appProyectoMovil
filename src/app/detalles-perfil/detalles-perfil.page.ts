import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-perfil',
  templateUrl: './detalles-perfil.page.html',
  styleUrls: ['./detalles-perfil.page.scss'],
})
export class DetallesPerfilPage implements OnInit {

  constructor(public router:Router) {
    this.router.navigate(['detalles-perfil/detail-perfil'])
   }

  ngOnInit() {
  }

  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    if (direction =='salir'){
      localStorage.removeItem('ingresado');
      this.router.navigate(['login'])
    }
    else{
       this.router.navigate(['detalles-perfil/'+direction])
    }
  }

}

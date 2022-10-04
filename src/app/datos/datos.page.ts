import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { GetdatosService } from './getdatos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  datos;

  constructor(public proovedor:GetdatosService,private loadingCtrl: LoadingController) {}



  ngOnInit() {
    this.proovedor.obtenerDatos().subscribe(
      (data) => {this.datos = data},
      (error)=> {console.log(error);}
    );

    this.conteo();
    this.showLoading();
    
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando datos...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }

  conteo(){
    setTimeout(function(){
      console.log('Datos')
    },1000);
  }
  
}

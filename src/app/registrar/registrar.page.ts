import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  mdl_nombre: string = '';
  mdl_apellido: string = '';
  mdl_correo: string = '';
  mdl_pass: string = '';
  mdl_pass2: string = '';

  constructor(private router: Router, private api: ApiService,
    private loading: LoadingController, private toastController: ToastController) { }

  ngOnInit() {
    this.loading.create({
      message: '',
      spinner: 'bubbles'
    }).then(res => {
      res.dismiss();
    });
  }
  usuarioAlmacenar(){
    let that = this;
    if(this.mdl_correo== '' && this.mdl_pass=='' && this.mdl_nombre=='' && this.mdl_apellido ==''){
      that.mostrarMensaje('Todos los campos son obligatorio');
    }else if(this.mdl_pass.length <4){
      that.mostrarMensaje('El minimo de caracteres para la contraseña es 4');
    }else if(this.mdl_pass != this.mdl_pass2){
      that.mostrarMensaje('Las contraseñas no coinciden.');
    }else{
      this.loading.create({
        message: 'Creando usuario...',
        spinner: 'bubbles'
      }).then(async res => {
        res.present();
        let data = await that.api.usuarioAlmacenar(
          that.mdl_correo,that.mdl_pass,that.mdl_nombre,that.mdl_apellido
        );
        if(data['result'][0].RESPUESTA == 'OK') {
          that.mostrarMensaje('El usuario se registro correctamente');
          that.router.navigate(['login'])
          console.log(data)
        } else {
          that.mostrarMensaje('El correo ya existe');
          console.log(data)
        }
        res.dismiss();
      }
      )
    }
  }

  async mostrarMensaje(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      position: 'bottom'
    });

    await toast.present();
  }

}

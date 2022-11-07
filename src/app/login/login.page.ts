import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validador: boolean = false;
  mdl_correo: string = '';
  mdl_pass: string = '';


  constructor(private router: Router, private api: ApiService,
    private loading: LoadingController, private toastController: ToastController
  ) {
    if (window.localStorage.getItem('usuario') != null) {
      this.api.validador = true;
      this.router.navigate(['home']);
    } else {
      this.api.validador = false;
      this.router.navigate(['login']);
    }
  }

  navegar() {
    this.router.navigate(['registrar']);
  }
  ngOnInit() {
    this.loading.create({
      message: '',
      spinner: 'bubbles'
    }).then(res => {
      res.dismiss();
    });
  }
  
  usuarioLogin(){
    let that = this;
    if(this.mdl_pass.length <4){
      that.mostrarMensaje('El minimo de caracteres para la contraseña es 4');
    }else{
      this.loading.create({
        message: 'Iniciando sesion...',
        spinner: 'bubbles'
      }).then(async res => {
        res.present();
        let data = await that.api.usuarioLogin(
          that.mdl_correo,that.mdl_pass
        );
        if(data['result'] == 'LOGIN OK') {
          that.mostrarMensaje('Se ha iniciado sesion exitosamente');
          localStorage.setItem('usuario', JSON.stringify({user:that.mdl_correo}));
          that.api.validador = true;
          that.router.navigate(['producto']);
          localStorage.setItem('ingresado','true');
          console.log(data);
        } else {
          that.mostrarMensaje('El correo o la contraseña es incorrecta');
          console.log(data);
        }
        res.dismiss();
      }
      )
    }

  }
  async mostrarMensaje(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

}

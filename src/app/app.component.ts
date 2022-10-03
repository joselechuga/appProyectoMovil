import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navCtrl: NavController) {}


  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
    console.log('salir');
  }

  ngOnInit() {

  }

}


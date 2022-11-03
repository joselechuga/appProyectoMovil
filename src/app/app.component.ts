import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { using } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navCtrl: NavController,
    private storage: Storage) {}


  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
    console.log('salir');
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

}


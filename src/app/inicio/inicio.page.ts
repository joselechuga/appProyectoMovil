import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router:Router,public alertController:AlertController,
    public navCtrl: NavController) {this.router.navigate(['inicio']); }

  ngOnInit() {
  }

  segmentChanged($event) {
    console.log($event.detail.value);
    let direction = $event.detail.value
    this.router.navigate(['inicio/' + direction])
  }
}

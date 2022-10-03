import { Component, OnInit } from '@angular/core';
import { createAnimation, NavController } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = JSON.parse(localStorage.getItem('usuario'));

  constructor(public navCtrl: NavController) { }



  ngOnInit() {
    const animation = createAnimation()
      .addElement(document.querySelector('.square'))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');

    document.querySelector('#play').addEventListener('click', () => {
      animation.play();
    });

    document.querySelector('#pause').addEventListener('click', () => {
      animation.pause();
    });

    document.querySelector('#stop').addEventListener('click', () => {
      animation.stop();
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  /**variable que guarda la localiacion actual */
  ubicacion;


  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocationNative();
  }


  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition)=>{
      console.log(geposition);
      
    })
  }
}

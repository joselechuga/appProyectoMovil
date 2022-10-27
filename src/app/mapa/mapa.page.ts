import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild ('map')mapRef: ElementRef;
  map: GoogleMap;
  constructor() { }

  ionViewDidEnter(){
    this.createMap();
  }

  async createMap(){
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: 'environment.mapsKey',
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }

  ngOnInit() {
  }

}

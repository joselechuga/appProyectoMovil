import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.page.html',
  styleUrls: ['./catalogo-productos.page.scss'],
})
export class CatalogoProductosPage implements OnInit {

  productos = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://636848caedc85dbc84e49015.mockapi.io/producto')
    .subscribe(res => {
      this.productos = res;
      console.log('productos',this.productos);
    })
  }

}

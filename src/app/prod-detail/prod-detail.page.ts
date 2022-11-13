import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.page.html',
  styleUrls: ['./prod-detail.page.scss'],
})
export class ProdDetailPage implements OnInit {

  producto:string;
  detalle_prod;

  constructor(public http:HttpClient,public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.producto = this.activateRoute.snapshot.paramMap.get('id');

    this.http.get('https://636848caedc85dbc84e49015.mockapi.io/producto/' + this.producto)
      .subscribe(res => {
        this.detalle_prod = res;
        console.log(res);
      })
    
  }

}

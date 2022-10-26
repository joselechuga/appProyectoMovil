import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  id: any;
  idfinal: number;
  producto:any = [];
  name: string;
  imagen: string;
  desc: string;

  constructor(
    private activatedRoute : ActivatedRoute,
    private http:HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.idfinal = this.id - 1;
    console.log("id",this.id)


    this.getproducto().subscribe(res=>{
      console.log("Res",res)
      this.producto= res;
      this.name = this.producto[this.idfinal].name;
      this.imagen = this.producto[this.idfinal].imagen;
      this.desc = this.producto[this.idfinal].desc;
    });
  }

  getproducto(){
    return this.http
    .get("assets/files/producto.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

}

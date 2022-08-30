import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {map} from "rxjs/operators";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto:any = [];
  permission: boolean;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.permission = true;
    this.getproducto().subscribe(res=>{
      console.log("Res",res)
      this.producto= res;
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


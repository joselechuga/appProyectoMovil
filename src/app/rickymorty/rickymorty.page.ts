import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rickymorty',
  templateUrl: './rickymorty.page.html',
  styleUrls: ['./rickymorty.page.scss'],
})
export class RickymortyPage implements OnInit {

  personajes = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      this.personajes = res.results;
      console.log('personajes',this.personajes);
    })
  }

}

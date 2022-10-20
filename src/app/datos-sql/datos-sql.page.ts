import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-sql',
  templateUrl: './datos-sql.page.html',
  styleUrls: ['./datos-sql.page.scss'],
})
export class DatosSqlPage implements OnInit {

  constructor(public storage:Storage) {

}

  ngOnInit() {
  }

}

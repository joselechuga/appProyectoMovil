import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private sqlite:SQLite) { 
    this.sqlite.create({
      name: 'datos.db'
    }).then((db:SQLiteObject)=>{
      console.log('Base de datos creada');
      db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO(NOMBRE VARCHAR2(50),CONTRASENA VARCHAR(30))',[]).then(() =>{
        console.log('Tabla creada correctamente!');
      }).catch(e =>{
        console.log('Ocurrio un error!');
      })
    }).catch( e => {
      console.log('La base de datos no se ha podido crear!');
    })
  }

}

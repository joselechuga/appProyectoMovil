import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private sqlite: SQLite) {
    this.sqlite.create({
      name: "datos.db",
      iosDatabaseLocation: "default"
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO(MAIL VARCHAR2(70))', []).then(() => {
        console.log('FSR: TABLA OK');
      }).catch(e => {
        console.log('FSR: TABLA NOK');
      })
    }).catch(e => {
      console.log('FSR: BASE DE DATOS NOK');
    });
  }

  almacenarUsuario(correo) {
    this.sqlite.create({
      name: "datos.db",
      iosDatabaseLocation: "default"
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO USUARIO VALUES(?)', [correo]).then(() => {
        console.log('FSR: USER ALMACENADO OK');
      }).catch(e =>{
        console.log('FSR: USER ALMACENADO NOK');
      })
    }).catch(e => {
      console.log('FSR: USER ALMACENADO NOK');
    });
  }
  eliminarUsuario(correo) {
    this.sqlite.create({
      name: "datos.db",
      iosDatabaseLocation: "default"
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM USUARIO WHERE MAIL = ?', [correo]).then(() => {
        console.log('FSR: ELIMINADOR CORRECTAMENTE');
      })
    });
  }
}



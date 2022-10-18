import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  databaseObj: SQLiteObject;
  tables = {
    categories: "categories",
    persons: "persons",
  };

  constructor(private sqlite:SQLite) { }

  async createDatabase(){
    
    await this.sqlite.create({
      name:"ionic_sqlite_crud",
      location:"default",
    }).then((db: SQLiteObject) =>{
      this.databaseObj = db;
    }).catch((e) => {
      alert("ERROR no ha sido posible crear la base de datos"+ JSON.stringify(e));
    });
    

    await this.createTables();
  }



  async createTables(){
    await this.databaseObj.executeSql(

      `CREATE TABLE IF NOT EXISTS ${this.tables.categories}(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL UNIQUE)`,
      []
    );

    await this.databaseObj.executeSql(

      `CREATE TABLE IF NOT EXISTS ${this.tables.persons}(id INTEGER PRIMARY KEY AUTOINCREMENT, categoria_id INTEGER UNSIGNED NOT NULL, name VARCHAR(255) NOT NULL)`, 
      []

    );
  }
}

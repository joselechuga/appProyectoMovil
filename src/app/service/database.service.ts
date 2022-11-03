import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  databaseObj: SQLiteObject;
  tables = {
    categories: "categories",
    persons: "persons",
  };

  constructor(private sqlite: SQLite) {}

  async createDatabase() {
    await this.sqlite
      .create({
        name: "ionic_sqlite_crud",
        location: "default",
      })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
      })
      .catch((e) => {
        alert("Error Al Crear La Base De Datos " + JSON.stringify(e));
      });

    await this.createTables();
  }

  async createTables() {
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXISTS ${this.tables.categories} (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL UNIQUE)`,
      []
    );
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXIST sesion_data (
        user.name TEXT PRIMARY KEY NOT NULL,
        password INTEGER NOT NULL,
        active INTEGER(1) NOT NULL)`,
      []
    );
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXISTS ${this.tables.persons} (id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER UNSIGNED NOT NULL, name VARCHAR(255) NOT NULL)`,
      []
    );
  }
  
  async addCategory(name: string) {
    return this.databaseObj
      .executeSql(
        `INSERT INTO ${this.tables.categories} (name) VALUES ('${name}')`,
        []
      )
      .then(() => {
        return "Nueva Categoria Creada";
      })
      .catch((e) => {
        if (e.code === 6) {
          return "Esta Categoria Ya Existe";
        }

        return "Error Al Crear La Categoria " + JSON.stringify(e);
      });
  }

  async getCategories() {
    return this.databaseObj
      .executeSql(
        `SELECT * FROM ${this.tables.categories} ORDER BY name ASC`,
        []
      )
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return "Error Al Obtener Categories " + JSON.stringify(e);
      });
  }

  async deleteCategory(id: number) {
    return this.databaseObj
      .executeSql(`DELETE FROM ${this.tables.categories} WHERE id = ${id}`, [])
      .then(() => {
        return "Categoria Eliminada";
      })
      .catch((e) => {
        return "Error Al Eliminar La Categoria " + JSON.stringify(e);
      });
  }

  async editCategory(name: string, id: number) {
    return this.databaseObj
      .executeSql(
        `UPDATE ${this.tables.categories} SET name = '${name}' WHERE id = ${id}`,
        []
      )
      .then(() => {
        return "Categoria Actualizada";
      })
      .catch((e) => {
        if (e.code === 6) {
          return "La Catagoria Ya Existe";
        }

        return "Error Al Actualizar La Categoria " + JSON.stringify(e);
      });
  }

  async addPerson(name: string, category_id: number) {
    return this.databaseObj
      .executeSql(
        `INSERT INTO ${this.tables.persons} (name, category_id) VALUES ('${name}', ${category_id})`,
        []
      )
      .then(() => {
        return "Personal Creado";
      })
      .catch((e) => {
        return "Error Al Crear al Personal " + JSON.stringify(e);
      });
  }

  async getPersons() {
    return this.databaseObj
      .executeSql(
        `SELECT persons.id, persons.category_id, persons.name as person, categories.name as category FROM persons INNER JOIN categories ON categories.id = persons.category_id ORDER BY person ASC`,
        []
      )
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return "Error Al Obtener Al Personal " + JSON.stringify(e);
      });
  }

  async deletePerson(id: number) {
    return this.databaseObj
      .executeSql(`DELETE FROM ${this.tables.persons} WHERE id = ${id}`, [])
      .then(() => {
        return "Personal Eliminado";
      })
      .catch((e) => {
        return "Error Al Eliminar Al Personal " + JSON.stringify(e);
      });
  }

  async editPerson(name: string, category_id: number, id: number) {
    return this.databaseObj
      .executeSql(
        `UPDATE ${this.tables.persons} SET name = '${name}', category_id = ${category_id} WHERE id = ${id}`,
        []
      )
      .then(() => {
        return "Personal Actualizado";
      })
      .catch((e) => {
        return "Error al Actualizar Al Personal " + JSON.stringify(e);
      });
  }
  
  async sesionActive(){
    // Se desarrolla la consulta
    let sql = `SELECT user_name,active FROM sesion_data WHERE active=1 LIMIT 1`;
    // Se ejecuta la consulta y no le pasamos parametros [value,value1,...]
    return this.databaseObj.executeSql(sql,[])
    // Cuando se ejecute la consulta
    .then(response=>{ // obtenemos lo que devuelve la consulta
      return Promise.resolve(response.rows.item(0)); // Se obtiene el primer item de la consulta y se retorna
    });
  }
  /**
   * 
   * @param sesion 
   */
  async getSesionData(sesion:any){
    let sql = `SELECT user_name, active FROM sesion_data
    WHERE user_name=? AND password=? LIMIT 1`;
    return this.databaseObj.executeSql(sql,[sesion.Usuario,
      sesion.Password]).then(response=>{
        return Promise.resolve(response.rows.item(0));
      });
  }
    /**
   * 
   * @param sesion 
   */
  async createSesionData(sesion:any){
    let sql = `INSERT INTO sesion_data(user_name,password,active)
    VALUES(?,?,?)`;
    return this.databaseObj.executeSql(sql, [sesion.Usuario, 
      sesion.Password, sesion.Active]).then(response=>{
        return Promise.resolve(response.rows.item(0));
      });;
    }

  async  updateSesionData(sesion:any){
      let sql = `UPDATE sesion_data
      SET active=?
      WHERE user_name=?`;
      return this.databaseObj.executeSql(sql, [sesion.active,sesion.user_name]);
    }
   
}
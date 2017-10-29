import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  // database holder
  private db: any;

  /**
   * @desc opens database connection
   * @param _name
   * @param _location
   */
  openDB(_name: string, _location: string = 'default') {

    // wait for device to load
    window.addEventListener('deviceready', function () {

      // try to open database
      (window as any).sqlitePlugin.openDatabase(
        { name: `${_name}.db`, location: _location },
        (db: any) => {

          // init database
          this.db = db;
        }, (err: any) => {

          console.log(JSON.stringify(err));
        });
    }, false);
  }

  /**
   * @desc returns an instance of DBContext, 
   * openDB must have been called first
   * @param entity
   */
  getDBContext(entity: any): DBContext{

    if(this.db)
      return new DBContext(this.db, entity);
    else throw "Database not set";
  }

}


export class DBContext {
  
  private tableName: string;
  private columns: any[];

  // initialize DBcontext
  constructor(private DB: any, private entity: any) {
    
    // get table name
    this.tableName = (entity as Object).constructor.name;
    

    // iterate thru all object fields
    for(let key of Object.keys(entity as Object)){

      // add field to columns
      this.columns[key] = (entity as Object)[key];
    }
  }
  
  read($params: string | (string | number | boolean)[] = "*", operator: string = "=") {

  }

  create() {

  }

  update($params: string | (string | number | boolean)[] = "*", operator: string = "=") {

  }

  delete($params: string | (string | number | boolean)[] = "*", operator: string = "="){

  }

  exist($params: string | (string | number | boolean)[] = "*", operator: string = "="){

  }

  query() {

  }
}

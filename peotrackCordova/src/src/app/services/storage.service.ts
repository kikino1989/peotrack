import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  // database holder
  private db: any;
  private type: any;

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

          console.log(err.message);
        });
    }, false);
  }

  /**
   * @desc close database connection
   */
  closeDB(){
    this.db.close(
      function () {
        console.log("DB closed!");
      }, function (err) {
          console.log(err.message);
      }
    );
  }

  /**
   * @desc returns an instance of DBContext, 
   * openDB must have been called first
   * @param type: Object.constructor
   */
  getDBContext(type: Function): DBContext{

    if(this.db)
      return new DBContext(this.db, type);
    else throw "Database not set or connection closed";
  }

}


export class DBContext {
  
  private tableName: string;
  private columns: any[];

  /**
   * @desc sets up the DBContext object
   * @param DB 
   * @param type: Object.constructor
   */
  constructor(private DB: any, private type: Function) {
    
    // get table name
    this.tableName = this.type.name;
    
    // get the type properties
    this.columns = this.type.arguments;
  }
  
  /**
   * @desc returns an object or an array of objects
   * @param id 
   * @param cols 
   * @param operator 
   * @param values 
   */
  read(
      id?: number,
      cols: string | string[] = "*",
      operator: string = "=",
      values: string | number | boolean | (string | number | boolean)[] = ""
  ): any | any[] | boolean {

    // set up transaction
    this.DB.transaction((tx) => {

      let query = ``; // query string holder
      let where = (id)? ` WHERE id ${operator} ${id}`: ``; // where string query
      let result: any | any[] | undefined;

      // check if cols is a string
      if (typeof cols == "string") {

        // assamble query string
        query = `SELECT ${cols} FROM ${this.tableName}` + where ;

      // check if cols is a string
      } else if (typeof cols == typeof Array)  {

        // assamble query string
        query = `SELECT ${(cols as Array<string>).keys().toLocaleString()} FROM ${this.tableName}` + where;
      }else throw "unsupported type";

      // execute query
      tx.executeSql(query, (typeof values == "string")? [values]: values,
       function (tx, resultSet) {

          // check if we should return an array
          if(resultSet.rows.length > 1){

            result = [];
            // iterate thru all result sets
            for(let i = 0; i < resultSet.rows.length; i++){
              
              // save values to type properties
              result.push(new this.type(resultSet.rows.item(i)));
            }
          // check if we should return a single instance
          }else if(resultSet.rows.length == 1){

            // create a new instance of the type
            result = new this.type(resultSet.rows.item(0));
          // check if there are not results
          }else {
            result = false;
          }
          
          console.log("read successful");
        },
        function (tx, error) {
          console.log(error.message);
        });
    }, function (error) {
      console.log( error.message);
    }, function () {
      console.log('transaction ok');
    });
  }

  /**
   * @desc returns the initialized instance of the type
   * @param entity 
   */
  create(entity: any): number{

    let rowsAffected;
    // sets up transaction
    this.DB.transaction(function (tx) {
      
      let values: string = this.getValuesCount(); // values in the form of (?,?,?) for the size of keys.length
      let query = `INSERT INTO ${this.tableName} (${this.columns.keys().toLocaleString()}) VALUES ${values}`; // query string holder

      // run query
      tx.executeSql(query, entity.values(), function (tx, res) {

        // get the affected rows
        rowsAffected = res.rowsAffected; 

        console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
      },
        function (tx, error) {
          console.log(error.message);
        });
    }, function (error) {
      console.log(error.message);
    }, function () {
      console.log('transaction ok');
    });

    return rowsAffected;
  }

  update($cols: string | (string | number | boolean)[] = "*", operator: string = "=") {
    // UPDATE Cars SET Name='Skoda Octavia' WHERE Id=3;
    db.transaction(function (tx) {

      var query = "UPDATE customerAccounts SET firstname = ? WHERE acctNo = ?";

      tx.executeSql(query, [first, id], function (tx, res) {
        console.log("insertId: " + res.insertId);
        console.log("rowsAffected: " + res.rowsAffected);
      },
        function (tx, error) {
          console.log('UPDATE error: ' + error.message);
        });
    }, function (error) {
      console.log('transaction error: ' + error.message);
    }, function () {
      console.log('transaction ok');
    });
  }

  delete($cols: string | (string | number | boolean)[] = "*", operator: string = "="){
    db.transaction(function (tx) {

      var query = "DELETE FROM customerAccounts WHERE acctNo = ?";

      tx.executeSql(query, [acctNum], function (tx, res) {
        console.log("removeId: " + res.insertId);
        console.log("rowsAffected: " + res.rowsAffected);
      },
        function (tx, error) {
          console.log('DELETE error: ' + error.message);
        });
    }, function (error) {
      console.log('transaction error: ' + error.message);
    }, function () {
      console.log('transaction ok');
    });
  }

  exist($cols: string | (string | number | boolean)[] = "*", operator: string = "="){

  }

  query() {

  }

  /**
   * @desc returns (?,?,?) for the size of keys.length
   */
  getValuesCount(): string{

    let value: string = "(";
    for(let i = 0; i < this.columns.length; i++){

      value += (i == this.columns.length - 1)? "?": "?,";
    }
    value += ")";
    return value;
  }
}

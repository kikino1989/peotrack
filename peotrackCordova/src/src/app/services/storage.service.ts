import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  // database holder
  private db: any;
  private entity: any;

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
   * @param entity
   */
  getDBContext(entity: any): DBContext{

    if(this.db)
      return new DBContext(this.db, entity);
    else throw "Database not set or connection closed";
  }

}


export class DBContext {
  
  private tableName: string;
  private columns: any[];

  // initialize DBcontext
  constructor(private DB: any, private entity: any) {
    
    // get table name
    this.tableName = (entity as Object).constructor.name;
    
    // get the entity properties
    this.columns = this.getEntityProps();
  }
  
  read($params: string | (string | number | boolean)[] = "*", operator: string = "=") {
      
    db.transaction(function (tx) {

      var query = "SELECT firstname, lastname, acctNo FROM customerAccounts WHERE lastname = ?";

      tx.executeSql(query, [last], function (tx, resultSet) {

        for (var x = 0; x < resultSet.rows.length; x++) {
          console.log("First name: " + resultSet.rows.item(x).firstname +
            ", Acct: " + resultSet.rows.item(x).acctNo);
        }
      },
        function (tx, error) {
          console.log('SELECT error: ' + error.message);
        });
    }, function (error) {
      console.log('transaction error: ' + error.message);
    }, function () {
      console.log('transaction ok');
    });
  }

  create() {
    this.DB.transaction(function (tx) {
      
      
      var query = `INSERT INTO ${this.tableName} (${this.columns.keys().toLocaleString()}) VALUES (?,?,?)`;
      
              tx.executeSql(query, [first, last, acctNum], function(tx, res) {
                  console.log("insertId: " + res.insertId + " -- probably 1");
                  console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
              },
              function(tx, error) {
                  console.log('INSERT error: ' + error.message);
              });
          }, function(error) {
              console.log('transaction error: ' + error.message);
          }, function() {
              console.log('transaction ok');
          });
  }

  update($params: string | (string | number | boolean)[] = "*", operator: string = "=") {
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

  delete($params: string | (string | number | boolean)[] = "*", operator: string = "="){
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

  exist($params: string | (string | number | boolean)[] = "*", operator: string = "="){

  }

  query() {

  }

  /**
   * @desc returns the properties of the context entity
   */
  private getEntityProps(): any[]{

    // properties holder
    let props: any[] = [];

    // iterate thru all object fields
    for (let key of Object.keys(this.entity as Object)) {

      // check if object has property
      if ((this.entity as Object).hasOwnProperty(key)) {

        // add field to columns
        props[key] = (this.entity as Object)[key];
      }
    }

    return props;
  }
}

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

    // try to open database
    (window as any).sqlitePlugin.openDatabase(
      { name: `${_name}.db`, location: _location },
      (db: any) => {

        // init database
        this.db = db;
      }, (err: any) => {

        console.log(err.message);
      });
  }

  /**
   * @desc close database connection
   */
  closeDB() {
    if (this.db) {
      this.db.close(
        () => {
          console.log("DB closed!");
        }, (err) => {
          console.log(err.message);
        }
      );
    } else throw "not database connection";
  }

  /**
   * @desc execute given query
   * @param query
   * @param values
   * @param scs
   * @param err
   */
  query(query: string, values: any[] = [], scs: (tx, res) => void, err?: (tx, res) => void) {
    DBContext.query(this.db, query, values, scs, err);
  }

  /**
   * @desc returns an instance of DBContext, openDB must have been called first
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
  constructor(private DB: any, private type) {
    
    // get table name
    this.tableName = this.type.name;
    
    // get the type properties
    this.columns = this.type.arguments;
  }
  
  /**
   * @desc returns an object or an array of objects
   * @param id 
   * @param withColumns 
   * @param operator 
   * @param values 
   */
  read(
      id?: number,
      withColumns: string | string[] = "*",
      operator: string = "=",
      values: string | number | boolean | (string | number | boolean)[] = ""
  ): any[]{

    let results: any[] = []; // results to be returned

    // set up transaction
    this.DB.transaction((tx) => {

      let query = ``; // query string holder
      let where = (id)? ` WHERE id ${operator} ${id}`: ``; // where string query

      // check if withColumns is a string
      if (typeof withColumns == "string") {

        // assamble query string
        query = `SELECT ${withColumns} FROM ${this.tableName}` + where ;

      // check if withColumns is a string
      } else if (typeof withColumns == typeof Array)  {

        // assamble query string
        query = `SELECT ${(withColumns as Array<string>).keys().toLocaleString()} FROM ${this.tableName}` + where;
      }else throw "unsupported type";

      // execute query
      tx.executeSql(query, (typeof values == "string")? [values]: values,
        (tx, resultSet) => {

          // iterate thru all result sets
          for(let i = 0; i < resultSet.rows.length; i++){
              
            // add instance to results
            results.push(new (this.type as any)().init(resultSet.rows.item(i)));
          }
          
          console.log("read successful");
        },
         (tx, error) => {
          console.log(error.message);
        });
    },  (error) => {
      console.log( error.message);
    },  () => {
      console.log('transaction ok');
    });

    return results;
  }

  readWhere(
    withColumns: string | string[] = "*",
    operator: string = "=",
    glue: string = " AND ",
    where: any[]
  ): any[] {

    let results: any[] = []; // results to be returned

    // set up transaction
    this.DB.transaction((tx) => {

      let query = ``; // query string holder
      let _where = ` WHERE `;
      for(let i = 0; i < where.length; i++){

        // append withColumns to where clause
        _where += (` ${where.keys()[i]} ${operator} ?` + (i < where.length - 1) ? glue : '');
      }
      // check if withColumns is a string
      if (typeof withColumns == "string") {

        // assamble query string
        query = `SELECT ${withColumns} FROM ${this.tableName}` + _where;

        // check if withColumns is a string
      } else if (typeof withColumns == typeof Array) {

        // assamble query string
        query = `SELECT ${(withColumns as Array<string>).keys().toLocaleString()} FROM ${this.tableName}` + _where;
      } else throw "unsupported type";

      // execute query
      tx.executeSql(query, where.values(),
        (tx, resultSet) => {

          // iterate thru all result sets
          for (let i = 0; i < resultSet.rows.length; i++) {

            // add instance to results
            results.push(new (this.type as any)().init(resultSet.rows.item(i)));
          }

          console.log("read successful");
        },
        (tx, error) => {
          console.log(error.message);
        });
    }, (error) => {
      console.log(error.message);
    }, () => {
      console.log('transaction ok');
    });

    return results;
  }
  
  /**
   * @desc inserts new row in the table
   * @param entity 
   */
  create(entity: any): number{

    let rowsAffected;

    // sets up transaction
    this.DB.transaction( (tx) => {
      
      let values: string = this.getValues(); // values in the form of (?,?,?) for the size of keys.length
      let query = `INSERT INTO ${this.tableName} (${this.columns.keys().toLocaleString()}) VALUES ${values}`; // query string holder

      // run query
      tx.executeSql(query, entity.values(),  (tx, res) => {

        // get the affected rows
        rowsAffected = res.rowsAffected; 

        console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
      },
         (tx, error) => {
          console.log(error.message);
        });
    },  (error) => {
      console.log(error.message);
    },  () => {
      console.log('transaction ok');
    });

    return rowsAffected;
  }

  /**
   * @desc delete the row of the table
   * @param entity
   * @param withColumns 
   * @param operator 
   * @param glue 
   */
  update(
    entity: any, 
    withColumns: string | string[] = "id",
    operator: string = "=",
    glue: string = " AND "
  ): number {

    let rowsAffected;

    // sets up transaction
    this.DB.transaction( (tx) => {

      // query string holder
      let query = 
        `UPDATE ${this.tableName} SET (${this.getValues(entity)})` + 
        this.getWhere(withColumns, operator, glue); 

      tx.executeSql(query, entity.values(),  (tx, res) => {
        
        rowsAffected = res.rowsAffected;
        console.log("rowsAffected: " + res.rowsAffected);
      },
         (tx, error) => {
          console.log(error.message);
        });
    },  (error) => {
      console.log(error.message);
    },  () => {
      console.log('transaction ok');
    });

    return rowsAffected;
  }

  /**
   * @desc delete the row of the table
   * @param entity
   * @param withColumns 
   * @param operator 
   * @param glue 
   */
  delete(
    entity: any, 
    withColumns: string | string[] = "id",
    operator: string = "=",
    glue: string = " AND "
  ): number {

    let rowsAffected;
    
    this.DB.transaction( (tx) => {

      // query string holder
      let query = 
        `UPDATE ${this.tableName} SET (${this.getValues(entity)})` + 
        this.getWhere(withColumns, operator, glue); 

      tx.executeSql(query, entity.values(),  (tx, res) => {
        
        rowsAffected = res.rowsAffected;
        console.log("rowsAffected: " + res.rowsAffected);
      },
         (tx, error) => {
          console.log(error.message);
        });
    },  (error) => {
      console.log(error.message);
    },  () => {
      console.log('transaction ok');
    });

    return rowsAffected;
  }

  /**
   * @desc returns whether an row with the id of the entity exist
   * @param entity
   */
  exist(entity): boolean{

    let has: boolean;
    this.DB.executeSql(`SELECT * FROM ${this.tableName} WHERE ID = ${entity.id}`, [], 
      (rs) =>{
        has = rs.rows.length > 0;
      }, (error) => {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      }
    );

    return has;
  }

  /**
   * @desc exequest a custom query 
   * @param query 
   * @param values 
   * @param scs 
   * @param err 
   */
  static query(DB, query: string, values: any[] = [], scs?: (tx, res) => void, err?: (tx, res) => void) {

    // sets up transaction
    DB.transaction((tx) => {

      // run query
      tx.executeSql(query, values, scs, err);
    }, (error) => {
      console.log(error.message);
    }, () => {
      console.log('transaction ok');
    });
  }

  /**
   * @desc return a where clause 
   * @param withColumns 
   * @param operator 
   * @param glue 
   */
  private getWhere(withColumns: string | string[], operator: string, glue: string): string{

    let where: string = ""; // where clause holder

    // check if withColumns is string
    if (typeof withColumns == "string") {

      // set where clause
      where = ` WHERE ${withColumns} ${operator} ?`;
      // check if withColumns is array
    } else if (typeof withColumns == typeof Array) {

      // set where clause
      where = ` WHERE`;
      // iterate thru each column
      for (let i = 0; i < withColumns.length; i++) {

        // append withColumns to where clause
        where += (` ${withColumns[i]} ${operator} ?` + (i < withColumns.length - 1) ? glue : '');
      }
    } else throw "unsupported type";

    return where;
  }

  /**
   * @desc returns (?,?,?) for the size of keys.length
   */
  private getValues(entity?: any): string{

    let value: string = entity? "": "(";
    for(let i = 0; i < this.columns.length; i++){

      // check if the entity exist
      if(entity){

        // set up string for update query
        value += (i == this.columns.length - 1)? `${this.columns[i]} = ?`: `${this.columns[i]} = ?,`;
      }else{

        // set up string for insert query
        value += (i == this.columns.length - 1)? "?": "?,";
      }
    }
    value += entity? "": ")";
    return value;
  }
}

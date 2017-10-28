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

}

export class DBContext {
  
  private tableName;
  private fields;

  constructor(private DB: any, private entity: any) {

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

import { Injectable } from '@angular/core';
import Client from '../models/client';
import { StorageService } from './storage.service';

@Injectable()
export class ClientService {

  constructor(private storage: StorageService) { }

  /**
   * @desc get client list
   * @param sort
   */
  getClients(sort: boolean = false): Client[]{

    // open database connection
    this.storage.openDB("peotrack.db");

    // get clients
    let clients = this.storage.getDBContext(Client.prototype.constructor).read();

    // close database connection
    this.storage.closeDB();

    // check if clients has any elements
    if(clients.length > 0){

      // sort clients
      if(sort){
        return clients.sort(
          (a: Client, b: Client) => {
            if(a.fullname > b.fullname)
              return 1
            else if(a.fullname < b.fullname)
              return -1
            else 
              return 0;
        });
      }else{
        return clients.sort(
          (a: Client, b: Client) => {
            if(a.fullname > b.fullname)
              return -1
            else if(a.fullname < b.fullname)
              return 1
            else 
              return 0;
        });
      }
    }else return clients;
  }

  /**
   * @desc returns client with the given id
   * @param id: number 
   */
  find(id: number): Client{
    
    let selectedClient: Client;

    // open database connection
    this.storage.openDB("peotrack.db");

    // get client
    selectedClient = (<Array<Client>>this.storage.getDBContext(Client.prototype.constructor).read(id))[0];

    // close database connection
    this.storage.closeDB();
    
    return selectedClient;
  }

}

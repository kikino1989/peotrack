import { Injectable } from '@angular/core';
import Client from '../models/client';
import { StorageService } from './storage.service';

@Injectable()
export class ClientService {

  // publics
  clients: Client[];

  constructor(private storage: StorageService) { 
    
    this.clients = [
      new Client(
        "enrique gonzalez",
        "7867097661",
        "kikino1989@yahoo.com",
        "14421 sw 88th street apt m301"
      ),
      new Client(
        'kexelis gonzalez',
        '7863706223'
      )
    ];
  }

  /**
   * @desc get client list
   */
  getClients(sort: boolean = false): Client[]{

    if(sort){
      return this.clients.sort(
        (a: Client, b: Client) => {
          if(a.fullname > b.fullname)
            return 1
          else if(a.fullname < b.fullname)
            return -1
          else 
            return 0;
      });
    }else 
      return this.clients.sort(
        (a: Client, b: Client) => {
          if(a.fullname > b.fullname)
            return -1
          else if(a.fullname < b.fullname)
            return 1
          else 
            return 0;
      });
  }

  /**
   * @desc returns client with the given id
   * @param id: number 
   */
  find(id: number): Client{

    let selectedClient: Client;
    this.clients.forEach((client) => {

      if(client.id == id) {
        selectedClient = client;
        return; 
      }
    });

    return selectedClient;
  }

}

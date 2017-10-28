import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { ClientService } from '../services/client.service';
import Client from '../models/client'
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  // public properties
  search: string;
  showform: boolean;
  newClient: Client;
  clients: Client[];
  listHeight: string = '250px';
  private sort: boolean;

  constructor(private clientService: ClientService) { }

  /**
   * @desc init component properties
   */
  ngOnInit() {
    this.sort = false;
    this.newClient = new Client( "", "");
    this.showform = true;
    this.clients = this.clientService.getClients(this.sort);
  }

  updateList(){
    this.clients = this.clientService.getClients(this.sort);
  }
  
  /**
   * @desc toggles the client form
   */
  toggleForm(){
    this.showform = !this.showform;

    // enlarge or shorten list container
    if(this.showform){
      this.listHeight = '250px';
    }else{
      this.listHeight = '500px';
    }
  }

  /**
   * @desc add client to clients
   */
  addClient(){
    this.clients.push(this.newClient);
    this.newClient = new Client( "", "");
  }

  searchMethod(client: Client, search:string): boolean{
    return client.fullname.includes(search);
  }

  displayMethod(client: Client): string{
    return client.fullname;
  }
}

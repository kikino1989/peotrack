import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ClientService } from '../services/client.service'; 
import Client from '../models/client';
import { OrderService } from '../services/order.service';
import Order from '../models/order';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})

export class ClientDetailsComponent implements OnInit {

  // publics
  show: boolean;
  showform: boolean;
  listHeight: string = "250px";
  showcard: boolean;
  client: Client;
  clientOrders: Order[];
 
  //privates
  private sort: boolean;

  constructor(
    private clientService: ClientService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() { 

    this.show = true;
    this.showform = false;
    this.showcard = true;
    this.sort = false;

    this.client = this.clientService.find(
      parseInt(this.route.snapshot.paramMap.get('id'))
    );

    this.clientOrders = this.orderService.getClientOrders( 
      parseInt(this.route.snapshot.paramMap.get('id')), this.sort
    );
  }

  updateList(){
    this.clientOrders = this.orderService.getClientOrders( 
      parseInt(this.route.snapshot.paramMap.get('id')), this.sort
    );
  }
  /**
   * @desc shows or hide card or form
   */
  toggle(){
    this.show = !this.show;

    // enlarge or shorten list container
    if(this.show){
      this.listHeight = '250px';
    }else{
      this.listHeight = '500px';
    }
  }

  /**
   * @desc show the card and hide form
   */
  showEdit(){
    this.showcard = false;
    this.showform = true;
  }

  /**
   * @desc hide the card and show form
   */
  showClient(){
    this.showcard = true;
    this.showform = false;
  }

  goBack(){
    this.router.navigate(['/main']);
  }

  /**
   * @desc save client information
   */
  saveClient(){
    
    this.showClient();
    // save client infor to database
  }

  saveStatus(order){
    // save order to the data base
  }

  searchMethod(order: Order, search:string): boolean{
    return order.has(search);
  }

  displayMethod(order: Order): string{
    return `date : ${order.created_at} total ${order.getTotal()} `;
  }
}

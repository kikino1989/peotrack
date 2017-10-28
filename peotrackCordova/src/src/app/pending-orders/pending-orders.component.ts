import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ClientService } from '../services/client.service'; 
import Client from '../models/client';
import { OrderService } from '../services/order.service';
import Order from '../models/order';



@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  // publics
  show: boolean;
  listHeight: string = "500px";
  client: Client;
  orders: Order[];
 
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
    this.sort = false;

    this.orders = this.orderService.getPendingOrders(this.sort);
  }

  goBack(){
    this.router.navigate(['/main']);
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

  updateList(){
    this.orderService.getPendingOrders(this.sort);
  }
} 

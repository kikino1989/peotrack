import { Injectable } from '@angular/core';
import Order from '../models/order';
import Item from '../models/item';
import { StorageService } from './storage.service';

@Injectable()
export class OrderService {
  
  orders: Order[];

  constructor(private storage: StorageService) {

  }


  find(id: number): Order{
    
    let selectedOrder: Order;
    this.orders.forEach((order) =>{
      if(order.id == id){

        selectedOrder = order;
        return;
      }
    });
    return selectedOrder;
  }

  // return orders
  getOrders(): Order[]{

    return this.orders;
  }

  getPendingOrders(sort: boolean = false): Order[]{

    let pendingOrders: Order[] = [];
    this.orders.forEach((order: Order) => {

      if(order.status == 'Pending'){

        pendingOrders.push(order);
      }
    });

    return pendingOrders;
  }

  getClientOrders(clientId: number, sort: boolean = false): Order[]{
    
    let selectedOrders: Order[] = [];
    this.orders.forEach((order: Order) => {

      if(order.clientId == clientId){

        selectedOrders.push(order);
      }
    });

    return (sort)?
      selectedOrders.sort((a: Order, b: Order) =>{
        if(a.created_at > b.created_at)
          return -1;
        else if(a.created_at < b.created_at)
          return 1;
        else return 0;
      }):
      selectedOrders.sort((a: Order, b: Order) =>{
        if(a.created_at < b.created_at)
          return -1;
        else if(a.created_at > b.created_at)
          return 1;
        else return 0;
      });

  }
}

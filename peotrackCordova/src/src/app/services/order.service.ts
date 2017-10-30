import { Injectable } from '@angular/core';
import Order, {StatusEnum} from '../models/order';
import Item from '../models/item';
import { StorageService } from './storage.service';

@Injectable()
export class OrderService {

  constructor(private storage: StorageService) {}

  /**
   * @desc returns the order with the given id
   * @param id 
   */
  find(id: number): Order{
    
    let selectedOrder: Order;
    let where = [];where["orderId"] = id;

    // open database connection
    this.storage.openDB("peotrack.db");
    
    // get order
    selectedOrder = (<Array<Order>>this.storage
      .getDBContext(Order.prototype.constructor).read(id))[0];

    // close database connection
    this.storage.closeDB();

    return selectedOrder;
  }

  /**
   * @desc return all orders 
   */
  getOrders(): Order[]{

    let orders: Order[] = [];

    // open database connection
    this.storage.openDB("peotrack.db");
    
    // get order
    orders = <Array<Order>>this.storage
      .getDBContext(Order.prototype.constructor).read();

    // close database connection
    this.storage.closeDB();

    return orders;
  }

  getPendingOrders(sort: boolean = false): Order[] {

    let orders: Order[] = [];
    let where = []; where["status"] = StatusEnum.pending;

    // open database connection
    this.storage.openDB("peotrack.db");

    // get order
    orders = <Array<Order>>this.storage
      .getDBContext(Order.prototype.constructor).readWhere(undefined, undefined, undefined, where);

    // close database connection
    this.storage.closeDB();

    return orders;
  }

  getClientOrders(clientId: number, sort: boolean = false): Order[]{
    
    let orders: Order[] = [];
    let where = []; where["clientId"] = clientId;

    // open database connection
    this.storage.openDB("peotrack.db");

    // get order
    orders = <Array<Order>>this.storage
      .getDBContext(Order.prototype.constructor).readWhere(undefined, undefined, undefined, where);

    // close database connection
    this.storage.closeDB();

    return (sort)?
      orders.sort((a: Order, b: Order) =>{
        if(a.created_at > b.created_at)
          return -1;
        else if(a.created_at < b.created_at)
          return 1;
        else return 0;
      }):
      orders.sort((a: Order, b: Order) =>{
        if(a.created_at < b.created_at)
          return -1;
        else if(a.created_at > b.created_at)
          return 1;
        else return 0;
      });

  }
}

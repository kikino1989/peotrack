import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import Item from '../models/Item';
import Order from '../models/order';
import Client from '../models/client';
import { OrderService } from '../services/order.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  sort: boolean = false;
  order: Order;
  client: Client;
  defaultItem: Item;

  constructor(
    private clientService: ClientService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.defaultItem = new Item("your product", 0);

    if(this.route.snapshot.paramMap.get('orderId')){
      
      this.order = this.orderService.find(
        parseInt(this.route.snapshot.paramMap.get('orderId'))
      );
    }else{
      
      this.order = new Order(
        parseInt(this.route.snapshot.paramMap.get('clientId')),
        new Date().toUTCString(),
        []
      );
    }

    this.client = this.clientService.find(this.order.clientId);  
  }

  add(){
    this.order.itemList.push(this.defaultItem);
    this.defaultItem = new Item("your product", 0);
  }

  delete(item, items){
    items.splice(
      items.indexOf(item)
    );
  }

  goBack() {

    // get default back route if src not defined
    let src = !this.route.snapshot.paramMap.get('src')? 'client-details' : this.route.snapshot.paramMap.get('src');

    // get proper back route
    let path = '/' + (src == 'client-details') ? src + '/' + this.order.clientId : src;

    // redirate
    this.router.navigate([path]);
  }

  save(){
    // save order to the server
    this.orderService.orders.push(this.order);
    this.goBack();
  }

  displayMethod(item: Item): string{
    return `product : ${ item.name }, sold at ${ item.sellPrice } ${ item.buyPrice? 'bought at' + item.buyPrice: '' }`;
  }

  searchMethod(item: Item, search:string): boolean{
    return item.name.includes(search);
  }
 
  updateList(){
    if(this.sort){
      return  this.order.itemList.sort(
        (a: Item, b: Item) => {
          if(a.name > b.name)
            return 1
          else if(a.name < b.name)
            return -1
          else 
            return 0;
      });
    }else 
      return this.order.itemList.sort(
        (a: Item, b: Item) => {
          if(a.name < b.name)
            return 1
          else if(a.name > b.name)
            return -1
          else 
            return 0;
      });
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Client from '../models/client';
import Order from '../models/order';
import Item from '../models/item';

@Component({
  selector: 'list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  @Input() listType: string = 'client';
  @Input() back: string = 'client-details';
  @Input() entities: Item[] | Order[] | Client[];
  @Input() path?: string;
  @Input() clientId?: number;
  @Input() sMethod?: (entity: Client | Order | Item, search: string) => boolean;
  @Input() dMethod: (entity: Client | Order | Item) => string;
  @Input() height: string = "250px";
  @Input() sort?: boolean; 
  @Output() sortChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() statusHandler?: (entity: Order) => void;
  @Input() deleteHandler?: (entity: Item, entities: Item[]) => void;

  search: string;
  
  constructor() { }

  ngOnInit() {
    this.search = '';
  }

  toggleSort(){
    this.sort = !this.sort;
    this.sortChange.emit(this.sort);
  }

  searchMethod(entity: Client | Order | Item, search: string ): boolean{
    return this.sMethod(entity, search);
  }

  displayMethod(entity: Client | Order | Item,): string{
    return this.dMethod(entity);
  }
}

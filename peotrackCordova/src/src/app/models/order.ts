import Item from './item';
import { StorageService } from "../services/storage.service";

export enum StatusEnum {
    pending = "Pending", paid = "Paid", finished = "Finished", cancelled = "Cancelled"
}

export default class Order {

    public id: number;
    public clientId: number; 
    public created_at: string;
    public itemList: Item[];
    private status: StatusEnum;
    
    constructor({
        clientId: clientId, 
        created_at: created_at,
        status: status,
        id: id
    }, private storage: StorageService){
        this.id = id;
        this.clientId = clientId;
        this.created_at = created_at;
        this.status = status;

        let where = []; where["orderId"] = this.id;
        this.itemList = <Array<Item>>this.storage
          .getDBContext(Item.prototype.constructor)
          .readWhere(undefined, undefined, undefined, where);
    }

    /**
     * @desc determines if an order has an item
     * @param itemName 
     * @return boolean
     */
    has(itemName: string): boolean{
    
        let _has = false;
        this.itemList.forEach((item) => {
            
            if(item.name.includes(itemName)){
            _has = true;
            }
        });
            
        return _has;
    }

    /**
     * @desc returns the order total cost
     */
    getTotal(): number{
        
        let count = 0;
        this.itemList.forEach((item) =>{

            count += item.sellPrice;
        });

        return count;
    }

    /**
     * @desc returns how many items in an order
     */
    getItemCount(): number{

        return this.itemList.length;
    }
}

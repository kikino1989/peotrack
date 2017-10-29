import Item from './item';

export enum StatusEnum {
    pending, paid, finished, cancelled
}

export default class Order {

    static count: number = 0;
    
    constructor(
        public clientId: number, 
        public created_at: string,
        public itemList: Item[],
        private _status: StatusEnum = StatusEnum.pending,
        public id: number = Order.count
    ){
        Order.count++;
    }

    get status(): string{

        switch(this._status){
            case StatusEnum.pending: return "Pending";
            case StatusEnum.paid: return "Paid";
            case StatusEnum.finished: return "Finished";
            case StatusEnum.cancelled: return "Cancelled";
        }

        return "Pending";
    }

    set status(value: string){

        switch (value) {
            case "Pending": this._status = StatusEnum.pending;
            case "Paid": this._status = StatusEnum.paid;
            case "finished": this._status = StatusEnum.finished;
            case "cancelled": this._status = StatusEnum.cancelled;
        }
    }

    has(itemName: string): boolean{
    
        let _has = false;
        this.itemList.forEach((item) => {
            
            if(item.name.includes(itemName)){
            _has = true;
            }
        });
            
        return _has;
    }

    getTotal(): number{
        
        let count = 0;
        this.itemList.forEach((item) =>{

            count += item.sellPrice;
        });

        return count;
    }

    getItemCount(): number{

        return this.itemList.length;
    }
}

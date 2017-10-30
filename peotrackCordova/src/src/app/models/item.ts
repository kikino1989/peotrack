
export default class Item {

    public id: number;
    public orderId: number;
    public name: string;
    public sellPrice: number;
    public buyPrice?: number;

    constructor({
        name: name,
        sellPrice: sellPrice,
        buyPrice: buyPrice,
        id: id, 
        orderId: orderId
    }){
        this.name = name;
        this.sellPrice = sellPrice;
        this.id = id;
        this.orderId = orderId;
        this.buyPrice = buyPrice;
    }
}

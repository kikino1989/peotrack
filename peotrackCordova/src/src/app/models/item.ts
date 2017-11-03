
export default class Item {

  public id: number;

    constructor(
      public orderId: number = -1,
      public name: string = "",
      public sellPrice: number = 0,
      public buyPrice?: number
    ) {

    }

    init({
        name: name,
        sellPrice: sellPrice,
        buyPrice: buyPrice,
        id: id, 
        orderId: orderId
    }) {
        this.name = name;
        this.sellPrice = sellPrice;
        this.id = id;
        this.orderId = orderId;
        this.buyPrice = buyPrice;
    }
}

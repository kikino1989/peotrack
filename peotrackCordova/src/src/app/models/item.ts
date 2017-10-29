
export default class Item {

    static count: number = 0;
    
    constructor(
        public name: string,
        public sellPrice: number,
        public buyPrice?: number,
        public id: number = Item.count
    ){
        Item.count++;
    }
}

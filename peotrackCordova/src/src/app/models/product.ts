
export default class Product {

    public id: number;
    public name: string;

    constructor({
        name: name,
        id: id, 
    }){
        this.name = name;
        this.id = id;
    }
}

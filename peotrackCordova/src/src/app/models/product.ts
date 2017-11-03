
export default class Product {

    public id: number;

    constructor(
      public name: string = ""
    ) { }

    init({
        name: name,
        id: id, 
    }){
        this.name = name;
        this.id = id;
    }
}


export default class Client {

    public id: number;
    public fullname: string;
    public phone: string;
    public email?: string;
    public address?: string;

    constructor({
        fullname: fullname,
        phone: phone,
        email: email,
        address: address,
        id: id
    }){
        this.fullname = fullname;
        this.phone =  phone;
        this.email = email;
        this.address = address;
        this.id = id;
    }
}

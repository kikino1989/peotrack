
export default class Client {

    static count: number = 0;

    constructor( 
        public fullname: string,
        public phone: string,
        public email?: string,
        public address?: string,
        public id:number = Client.count
    ){
        Client.count++;
    }
}

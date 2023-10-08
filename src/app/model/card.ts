import { Orderfood } from "./orderfood";

export class Card{
    id!:number;
    nameOrder!:string;
    img!:string;
    price!:number;
    description!:string;
    quantity!:number;
    constructor(order: Orderfood){
        this.id=order.id;
        this.nameOrder=order.nameOrder;
        
        this.description=order.description;
        this.price=order.price;
        this.img=order.img;
        this.quantity=1;
    }

}
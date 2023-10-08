import { Card } from "./card";

export class Item{
   id!:number;
   img!:string;
	  quantity!:number;
    price!:number;


    constructor(order :Card){
      
        
        
        
        this.price=order.price;
        this.img=order.img;
        this.quantity=order.quantity;


    }
}
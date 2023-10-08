export class Orderfood {
    id!:number;
    nameOrder!:string;
    date_create!:Date;
    date_update!:Date;
    img!:string;
    price!:number;
    description!:string;
    constructor(id:number,nameOrder:string,date_create:Date,date_update:Date,description:string,price:number,img:string){
        this.id=id;
        this.nameOrder=nameOrder;
        this.date_create=date_create;
        this.date_update=date_update;
        this.description=description;
        this.price=price;
        this.img=img;
    }


}

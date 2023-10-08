export class Category {
    id!:number;
    nameCategory!:string;
    date_create!:Date;
    date_update!:Date;
    logoscategory!:String;
    constructor(id:number,nameCategory:string,date_create:Date,date_update:Date,logoscategory:String){
        this.id=id;
        this.nameCategory=nameCategory;
        this.date_create=date_create;
        this.date_update=date_update;
        this.logoscategory=logoscategory;
    }
}

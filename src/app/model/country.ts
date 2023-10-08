export class Country{
id!:number
nameCountry!:string
code!:string 

constructor(id:number,nameCountry:string,code:string){
    this.id=id;
    this.nameCountry=nameCountry;
    this.code=code
}
}
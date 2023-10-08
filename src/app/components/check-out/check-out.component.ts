import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Address } from 'src/app/model/address';
import { Card } from 'src/app/model/card';

import { Client } from 'src/app/model/Client';
import { Country } from 'src/app/model/country';
import { Item } from 'src/app/model/item';
import { PurchaseRequest } from 'src/app/model/purchaserequest';
import { RequestOrder } from 'src/app/model/requestorder';
import { spacevalidators } from 'src/app/model/spacevalidators';
import { State } from 'src/app/model/state';
import { CardserviceService } from 'src/app/services/cardservice.service';
import { CountrystateService } from 'src/app/services/countrystate.service';
import { PurchaseServiceService } from 'src/app/services/purchase-service.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor( private childrengroup :FormBuilder,private countrystateservice : CountrystateService,
    private cardservice: CardserviceService,
    private ps:PurchaseServiceService) { }
  countries!: Country[]
  statesfromperson: State[]=[]
  statestoperson:State[]=[]
  ordersize:number=0;
  orderprice:number=0;
checkoutParentGroup!:FormGroup
  ngOnInit(): void {
    
    this.myForm()
    this.getallcountries()
    this.getcardtotals()
   
    
  }

  myForm(){
    this.checkoutParentGroup = this.childrengroup.group({
      data: this.childrengroup.group({
       fullName:['',[Validators.required,Validators.minLength(3),spacevalidators.onlycontainspace]],

       gmail:['' ,[Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
       phone:['',[Validators.required,Validators.minLength(8),Validators.pattern('^[0-9]*$')]]
}),
fromPerson: this.childrengroup.group({
  country: [''],
  state: [''],
  zipCode: ['']
}),
toPerson: this.childrengroup.group({
  country: [''],
  state: [''],
  zipCode: ['']
}),
creditCard: this.childrengroup.group({
  cardType: [''],
  cardNumber: [''],
  code: ['']
})


})}
get fullName(){
  return this.checkoutParentGroup.get('data.fullName')
}
get email(){
  return this.checkoutParentGroup.get('data.gmail')
}
get phone(){
  return this.checkoutParentGroup.get('data.phone')
}
get statename(){
  return this.checkoutParentGroup.get('fromPerson.state.name')}

done(){
  if (this.checkoutParentGroup.invalid) {
    this.checkoutParentGroup.markAllAsTouched()
  } else {
    /* #1 */
    
    let client: Client = new Client();
      client.fullname = this.checkoutParentGroup.controls['data'].value.fullName;
      client.email = this.checkoutParentGroup.controls['data'].value.gmail;
      client.phoneNumber = this.checkoutParentGroup.controls['data'].value.phone;
   


/*2*/
let fromAddress:Address  = this.checkoutParentGroup.controls['fromPerson'].value
fromAddress.state=this.checkoutParentGroup.get('fromPerson.state')?.value.namestate


let toAddress : Address=this.checkoutParentGroup.controls['toPerson'].value
toAddress.state = this.checkoutParentGroup.get('toPerson.state')?.value.namestate

let requestOrder= new RequestOrder()
requestOrder.totalprice=this.orderprice
requestOrder.totalQuantity=this.ordersize
console.log(requestOrder)
let orders: Card[] = this.cardservice.orders;
let items: Item[]  = orders.map(order => new Item(order));



let purchaserequest = new PurchaseRequest();
purchaserequest.client=client
purchaserequest.fromAddress=fromAddress
purchaserequest.toAddress=toAddress
purchaserequest.requestOrder=requestOrder
purchaserequest.items=items
console.log(purchaserequest.client)
console.log(purchaserequest.fromAddress)
console.log(purchaserequest.items)
console.log(purchaserequest.toAddress)


this.ps.addRequestOrder(purchaserequest).subscribe({
  next: response=> {
    alert("Your Name : " + response.fullName)
    alert("Your Code : " + response.code)
    console.log(purchaserequest)
    
  },
  
  
 })











}}
similarGroup(event :Event){
  if((<HTMLInputElement>event.target).checked){
    this.checkoutParentGroup.controls.toPerson.setValue(this.checkoutParentGroup.controls.fromPerson.value)
   this.statestoperson=this.statesfromperson
  }
  else{
    this.checkoutParentGroup.controls.toPerson.reset()
  }
}

getallcountries(){
  this.countrystateservice.getallcountries().subscribe(
    data=>this.countries=data
    
  )
}
getByCountryCode(typeForm: any){
  const code =this.checkoutParentGroup.get(`${typeForm}.country`)!.value;

  this.countrystateservice.getByCountryCode(code).subscribe(
    data =>{
      if(typeForm === 'fromPerson'){
        this.statesfromperson = data
      } else {
        this.statestoperson = data
      }
      this.checkoutParentGroup.get(`${typeForm}.state`)!.setValue(data[0]);
  
})

}

getcardtotals(){
  this.cardservice.totalorders.subscribe(
    data =>this.ordersize=data
  )
  this.cardservice.totalprice.subscribe(
    data=>this.orderprice=data
  )
}


}
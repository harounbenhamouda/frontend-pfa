import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/card';
import { CardserviceService } from 'src/app/services/cardservice.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private cardservice:CardserviceService,
    private route: Router ) { }
  orders:Card[]=[]
  totalorder:number=0
  totalprice:number=0
  ngOnInit(): void {
    this.getOrders()
    this.getTotals()
    this.cardservice.calculateTotals()
  }
 getTotals(){
   this.cardservice.totalorders.subscribe(
     data=>this.totalorder=data
   )

   this.cardservice.totalprice.subscribe(
     data=>this.totalprice=data
   )
 }
  getOrders(){
    this.orders=this.cardservice.orders
  }
addorder(temp :Card){
this.cardservice.addOrderTocart(temp )
}
removeholeorder(temp:Card){
  this.cardservice.RemoveholeOrder(temp)
  
}
removeorder(temp :Card){
  this.cardservice.RemoveOrder(temp)
}
checkout(){
  this.route.navigateByUrl('/check-out')
}
}

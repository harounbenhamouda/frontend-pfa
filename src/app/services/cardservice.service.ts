import { templateJitUrl, ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card } from '../model/card';
import { Orderfood } from '../model/orderfood';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {
  orders:Card[]=[]
  s:number=0;
  totalorders=  new BehaviorSubject<number>(0);
  totalprice: Subject<number> = new BehaviorSubject<number>(0);
  constructor() { }
  addOrderTocart(order: Card){
    let isExist: boolean=false
    let   existOrder : Card| undefined;
    let m :any
    if(this.orders.length > 0){
      for(let temp of this.orders){
      
        if(temp.id===order.id){
 
          existOrder=temp;
          
          break
             

        }
      }}
      isExist=(existOrder != undefined)
      if(isExist){
         existOrder!.quantity++;
      }else {
        this.orders.push(order)
      }

      this.calculateTotals();
    
    }
  
    calculateTotals() {
     let totalElementsSizeOrder:number=0;
      let totalPriceOrders: number = 0;
      for (let temp of this.orders) {
        totalElementsSizeOrder += temp.quantity; // totalElementsSizeOrder = totalElementsSizeOrder +temp.quantity;
        totalPriceOrders += temp.quantity * temp.price;
      
        
      }
      this.totalorders!.next(totalElementsSizeOrder)
      this.totalprice.next((totalPriceOrders));
     
     
    }
    RemoveholeOrder(order:Card){
      let index=0;
      for(let temp of this.orders){
         index+=index
        if(temp.id===order.id){

           this.orders.splice(index,1)
           this.calculateTotals();
         
         
      }

    }
   
  }
  RemoveOrder(order:Card){
    let index=0;
    order.quantity--
    console.log(order.quantity)
    if(order.quantity==0){
      for(let temp of this.orders){
        index+=index
       if(temp.id===order.id){

          this.orders.splice(index,1)
    }}}
  this.calculateTotals();
  }

}

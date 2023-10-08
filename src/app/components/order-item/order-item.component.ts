import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orderfood } from 'src/app/model/orderfood';
import { OrderService } from 'src/app/services/order.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Card } from 'src/app/model/card';
import { CardserviceService } from 'src/app/services/cardservice.service';
@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
 

})
export class OrderItemComponent implements OnInit {

  constructor(private order:OrderService,
    private route:ActivatedRoute,private cardservice:CardserviceService) { }
orders!:Orderfood[]
    page: number = 1;
     pageLength: number = 1;
    orderSize: number = 0;
  ngOnInit(): void {


    this.route.paramMap.subscribe(
      () => {
        this.finishOrders();
      }
    )
  }
    finishOrders(){
    let res=this.route.snapshot.paramMap.get('id');
    let res1=this.route.snapshot.paramMap.get('word');
    if(res){
      this.getOrderByIdCategory()
    } else if(res1){
      this.getorderbyname();
    }else{

    this.getAllOrderFood();}
  }
  getAllOrderFood(){
    this.order.getordersize().subscribe(
     
      data=>{ ;
        this.orderSize=data}
    ) ; 
    this.order.getAllOrderFood(this.page-1,this.pageLength).subscribe(
      data=>this.orders=data
      
    );
  }
  getOrderByIdCategory(){
    
    let idc=this.route.snapshot.paramMap.get('id');
    this.order.getorderlengthBycategoryid(idc).subscribe(
      data=>{
        this.orderSize=data
      }
    );
    this.order.getOrderByIdCategory(idc,this.page-1,this.pageLength).subscribe(
      data  =>{ this.orders=data}

    );
  }
getorderbyname(){
  let word=this.route.snapshot.paramMap.get('word');
 
  this.order.getOrderByName(word,this.page-1,this.pageLength).subscribe(
    data =>{this.orders=data}
  )
}
doing(){
  this.finishOrders();
}
pageSize(event :Event){
  this.pageLength=+(<HTMLInputElement>event.target).value
  this.finishOrders();
}
addToCart(order:Orderfood){
  const card= new Card(order)
  this.cardservice.addOrderTocart(card)
  
}
}


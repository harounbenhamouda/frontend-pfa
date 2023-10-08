import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/model/card';
import { Orderfood } from 'src/app/model/orderfood';
import { CardserviceService } from 'src/app/services/cardservice.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(private order:OrderService,private  cardservice :CardserviceService,
    private route:ActivatedRoute) { }
    orders!:Orderfood
  ngOnInit(): void {
    this.getorderfoodbyid();
  }
  getorderfoodbyid(){
    
    let idf=this.route.snapshot.paramMap.get('id');
    this.order.getorderfoodbyid(idf).subscribe(
      data  =>{ this.orders=data}

    );

  } 
  addtocart(orders :Orderfood){
    const card= new Card(orders)
    this.cardservice.addOrderTocart(card)
  }
}

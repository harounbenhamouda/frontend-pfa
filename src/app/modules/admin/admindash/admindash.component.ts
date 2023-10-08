import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orderfood } from 'src/app/model/orderfood';
import { CardserviceService } from 'src/app/services/cardservice.service';
import { OrderService } from 'src/app/services/order.service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor( private order:AdminService,private route:ActivatedRoute,private cardservice:CardserviceService) { }
  orders!:Orderfood[]
    page: number = 1;
     pageLength: number = 1;
    orderSize: number = 0;
  ngOnInit(): void {
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

  pageSize(event :Event){
    this.pageLength=+(<HTMLInputElement>event.target).value
    
  }
}

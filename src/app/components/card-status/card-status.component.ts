import { Component, OnInit } from '@angular/core';
import { Orderfood } from 'src/app/model/orderfood';
import { CardserviceService } from 'src/app/services/cardservice.service';
import { AuthentificationServiceService } from 'src/app/services/security/authentification-service.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {
  ordersize:number=0;
  orderprice:number=0;
  constructor(private cardservice: CardserviceService ,private auth:AuthentificationServiceService) { }

  ngOnInit(): void { this.getCardStatus()
  }
  getCardStatus(){
    
    this.cardservice.totalorders.subscribe(
      data =>{
        this.ordersize=data
       
      
      }
    )
 this.cardservice.totalprice.subscribe(
   data=>{
     this.orderprice=data
    
   }
 )
  }


isAuthenticatedUser(){
  return this.auth.isLogin()
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderfood } from 'src/app/model/orderfood';
import { OrderService } from 'src/app/services/order.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthentificationServiceService } from 'src/app/services/security/authentification-service.service';
import { CardserviceService } from 'src/app/services/cardservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  orders!:Orderfood[]
  constructor(private order:OrderService,
    private route:ActivatedRoute,private router:Router,
    private auth:AuthentificationServiceService,
    private card: CardserviceService) { }

  ngOnInit(): void {

  }
dosearch(word:string){
 
 this.router.navigateByUrl('foodbyname/'+word)
}

isAuthenticatedUser(){
  return this.auth.isLogin()
}
logOut(){
  this.card.orders = [];
  this.card.totalorders.next(0);
  this.card.totalprice.next(0);
  
   this.auth.logOut()
   return this.router.navigateByUrl('/login')
  
}
}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { CategoryComponent } from './components/category/category.component';
import { DropdownmenuComponent } from './components/dropdownmenu/dropdownmenu.component';
import { SearchComponent } from './components/search/search.component';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CardStatusComponent } from './components/card-status/card-status.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { HttpInterceptorService } from './services/security/http-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { CodeActivationComponent } from './components/code-activation/code-activation.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
   
    OrderItemComponent,
    CategoryComponent,
    DropdownmenuComponent,
    SearchComponent,
    OrderdetailsComponent,
    CardStatusComponent,
    PurchaseComponent,
    CheckOutComponent,
    LoginComponent,
    SingupComponent,
    CodeActivationComponent,
    ResetpasswordComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //NgModule
    NgbPaginationModule,
    ReactiveFormsModule
    
   
  ],
 
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService,multi:true},CookieService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA 
  ],
})
export class AppModule { }

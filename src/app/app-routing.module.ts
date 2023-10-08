import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { RouteActivateService } from './services/route-activate.service';
import { LoginActivatedService } from './services/security/login-activated.service';
import { CodeActivationComponent } from './components/code-activation/code-activation.component';
import { AccountService } from './services/security/account.service';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'active',component:CodeActivationComponent,canActivate: [LoginActivatedService,AccountService]},
  {path:'allfoodorders',component:OrderItemComponent,canActivate: [RouteActivateService]},
  {path:'purchase',component:PurchaseComponent,canActivate: [RouteActivateService]},
  {path:'foodbyname/:word',component:OrderItemComponent,canActivate: [RouteActivateService]},
  {path:'foodbyid/:id',component: OrderdetailsComponent,canActivate: [RouteActivateService]},
  {path:'allcategories',component:CategoryComponent,canActivate: [RouteActivateService]},
  {path:'allcategories/:id',component:CategoryComponent,canActivate: [RouteActivateService]},
  {path:'category/:id',component:OrderItemComponent,canActivate: [RouteActivateService]},
  {path:'check-out',component:CheckOutComponent,canActivate: [RouteActivateService]},
  {path:'login',component:LoginComponent,canActivate: [LoginActivatedService]},
  {path:'signup',component:SingupComponent,canActivate: [LoginActivatedService]},
  {path:'reset',component:ResetpasswordComponent},
  {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then((m) => m.AdminModule),},
  

  {path:"",redirectTo:"/allfoodorders",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppRoutingModule { }

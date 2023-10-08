import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseRequest} from "../model/purchaserequest";
@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {
  host='http://localhost:9594/api/purchase'
  constructor(private http:HttpClient) { }


  addRequestOrder(purchaserequest:PurchaseRequest):Observable<any>{
    return this.http.post<PurchaseRequest>(this.host,purchaserequest)
    
  }
}

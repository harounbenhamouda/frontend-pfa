import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderfood } from '../model/orderfood';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  host='http://localhost:9594/admin/'
  constructor(private http:HttpClient) { }
  public getAllOrderFood(page:number,size:number):Observable<Orderfood[]>{

    
    return this.http.get<Orderfood[]>(`${this.host}allfoodorders?page=${page}&size=${size}`);}




    public getOrderByIdCategory(id:any, page:any,size:any):Observable<Orderfood[]>{
      return this.http.get<Orderfood[]>(`${this.host}category?id=${id}&page=${page}&size=${size}`);}
      
      public getOrderByName(word:any ,page:any,size:any):Observable<Orderfood[]>{
        return this.http.get<Orderfood[]>(`${this.host}foodbyname?word=${word}&page=${page}&size=${size}`);
      }
      public getorderfoodbyid(id:any):Observable<Orderfood>{
        return this.http.get<Orderfood>(`${this.host}foodbyid?id=${id}`)
      }
      public getordersize():Observable<number>{
        return this.http.get<number>(this.host+"ordersize")
      }
      public getorderlengthBycategoryid(id:any):Observable<number>{
        return this.http.get<number>(`${this.host}ordersizebycategoryid?id=${id}`)
      }





    
}

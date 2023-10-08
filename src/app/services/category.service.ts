import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  host="http://localhost:9594/api/allcategories"

  constructor(private http:HttpClient) { }
  public getAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.host)
  }
}

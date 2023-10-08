import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class CountrystateService {
  host='http://localhost:9594/api/'
  constructor(private http:HttpClient) { }


  public getallcountries():Observable<Country[]>{
    return this.http.get<Country[]>(this.host+"allcountries");}
  






    public getallstates():Observable<State[]>{
return this.http.get<State[]>(`${this.host}allstates`);
    }

    public getByCountryCode(code:string):Observable<State[]>{
      return this.http.get<State[]>(`${this.host}statebycode?code=${code}`);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
  host='http://localhost:9594/'
  
  constructor(private http:HttpClient,
    private cook: CookieService) { }
  public exuteAuthentication(email: any,password: any):Observable<any>{
    
    return this.http.post<any>(`${this.host}signin`,{email,password}).pipe(
      map(
        response => {
          sessionStorage.setItem("email",response.email)
          sessionStorage.setItem('token',`Bearer ${response.token}`)
          sessionStorage.setItem('roles',response.roles)
          this.cook.set("roles",response.roles)
          this.cook.set("email",response.email)
          this.cook.set("token",`Bearer ${response.token}`)
          
          return response;
        }
      )
    )
  }
  public createUser(email: any,password: any):Observable<any>{
    return this.http.post<any>(`${this.host}signup`,{email,password});
  }


  userActive(email:any,password:any): Observable<any>{
    return this.http.post<any>(`${this.host}active`,{email,password}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }


  ActivateAccount(email:any,code:any): Observable<any>{
    return this.http.post<any>(`${this.host}activate`,{email,code}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  resetpassword(email:any):Observable<any>{
    return this.http.post<any>(`${this.host}reset`,{email}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  changePassword(email:any,code:any,newpassword:any):Observable<any>{
    return this.http.post<any>(`${this.host}changepassword`,{email,code,newpassword}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }





haveAcces(){
  var loggedtoken=sessionStorage.getItem('token')||'';
  var extractedtoken=loggedtoken!.split('.')[1];
var atobdata=atob(extractedtoken)
var finaldata=JSON.parse(atobdata)
console.log(finaldata);

}

  getAuthentication(){
    return sessionStorage.getItem("email");
  }
  getToken(){
    if(this.getAuthentication()){
      return sessionStorage.getItem('token')
    }
  }
  getRoles(){
    if(this.getAuthentication()){
      return sessionStorage.getItem('roles')
    }
  }
  isLogin(){
    return !(sessionStorage.getItem('email') == null ||
           sessionStorage.getItem('token') == null);
  }
  logOut(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    this.cook.delete('email');
    this.cook.delete('token');
    
  }
}

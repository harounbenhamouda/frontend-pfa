import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationServiceService } from './authentification-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActivatedService  implements CanActivate{

  constructor(private auth: AuthentificationServiceService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.auth.isLogin()){
      this.auth.haveAcces()
      this.router.navigateByUrl("/allfoodorders")
      return false
    }
    return true;


  }
}

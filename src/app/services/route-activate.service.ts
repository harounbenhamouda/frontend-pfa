import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationServiceService } from './security/authentification-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivateService  implements CanActivate{

  constructor(private auth: AuthentificationServiceService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.auth.isLogin()){
      return true;
  }
  this.router.navigateByUrl("/login")
    return false;
}
}
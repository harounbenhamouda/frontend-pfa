import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthentificationServiceService } from './services/security/authentification-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store';
  constructor(private cook: CookieService,
    private auth: AuthentificationServiceService) {}

    ngOnInit(): void {
      if (this.isCookie()){
        sessionStorage.setItem("email",this.cook.get("email"))
        sessionStorage.setItem("token",this.cook.get("token"))
      }
    }




    isCookie(){
      if (this.cook.get('email') === '' || this.cook.get('token') === ''){
        return false;
      }
      return true;
    }


    isLogin(){
      return this.auth.isLogin()
    }
}

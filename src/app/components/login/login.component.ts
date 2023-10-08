import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/services/security/authentification-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private childrengroup :FormBuilder ,private auth: AuthentificationServiceService,private router :Router) { }
  loginParentGroup!:FormGroup
  ngOnInit(): void {this.myForm()
    
  }
  myForm(){
    this.loginParentGroup = this.childrengroup.group({
      data: this.childrengroup.group({
       

       email:['' ,[Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
       password: new FormControl('',[
        Validators.required
      ])
})
})

}

get email(){
  return this.loginParentGroup.get('data.email')
}
get password(){
  return this.loginParentGroup.get('data.password')
}



login() {
  if(this.loginParentGroup.invalid){
    this.loginParentGroup.markAllAsTouched()
    return;
  }
  this.auth.userActive(
    
    this.loginParentGroup.controls['data'].value.email,
    this.loginParentGroup.controls['data'].value.password
  ).subscribe({
    next: response =>{
      let ac = response.active;
      if(ac == 1){
        this.auth.exuteAuthentication(
          this.loginParentGroup.controls['data'].value.email,
          this.loginParentGroup.controls['data'].value.password
          
        ).subscribe({
          next: response =>{
            this.router.navigateByUrl("/allfoodorders")
          }
        })
      } else if(ac == 0){
       1
        sessionStorage.setItem("emailActive",this.loginParentGroup.controls['data'].value.email)
        this.router.navigateByUrl("/active")
      } else {
        alert("Invalid Email or Password")
      }
    }
    
  }) 
  }

}
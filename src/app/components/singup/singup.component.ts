import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/services/security/authentification-service.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private childrengroup :FormBuilder,private auth: AuthentificationServiceService,private router :Router) { }
  loginParentGroup!:FormGroup

  ngOnInit(): void {
    this.myForm()
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
signup(){
 this.auth.createUser(
  this.loginParentGroup.controls['data'].value.email,
      this.loginParentGroup.controls['data'].value.password
).subscribe({
  next: response => {
    if (response.result == 1){
     
      sessionStorage.setItem("emailActive",this.loginParentGroup.controls['data']!.value.email),
      this.router.navigateByUrl("/active")
    } else {
      alert("Email  Exists")
    }

  }
  
})

 
}
}
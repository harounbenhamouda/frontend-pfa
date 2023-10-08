import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { spacevalidators } from 'src/app/model/spacevalidators';
import { AuthentificationServiceService } from 'src/app/services/security/authentification-service.service';

@Component({
  selector: 'app-code-activation',
  templateUrl: './code-activation.component.html',
  styleUrls: ['./code-activation.component.css']
})
export class CodeActivationComponent implements OnInit {
  email:any;
  checkoutParentGroup!: FormGroup;
  constructor(private formChildGroup: FormBuilder,
    private auth: AuthentificationServiceService,
    private router: Router) { }

  ngOnInit(): void { this.email=sessionStorage.getItem("emailActive")
  this.myFormLogin()
  }


  myFormLogin(){
    this.checkoutParentGroup = this.formChildGroup.group({
      user:this.formChildGroup.group({
        code: new FormControl('',[
          Validators.required,
          spacevalidators.onlycontainspace
        ])
      })
    })
  }
  get code(){
    return this.checkoutParentGroup.get('user.code')
  }




  done() {
    console.log(this.checkoutParentGroup.controls['user'].value.code)
    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched()
      return
    }

    this.auth.ActivateAccount(
     this.email,
     this.checkoutParentGroup.controls['user'].value.code

    ).subscribe({
      next:response=>{
        if (response.result ==1){
          sessionStorage.removeItem("emailActive")
            this.router.navigateByUrl("/login")
        }

        else{
             alert("code invalid")
        }
      }
    }

    )
    

  }
}
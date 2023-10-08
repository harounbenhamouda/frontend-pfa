import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { spacevalidators } from 'src/app/model/spacevalidators';
import { AuthentificationServiceService } from 'src/app/services/security/authentification-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  checkoutParentGroup!: FormGroup;
  checkoutParentGroupReset!: FormGroup;
  enableForm: boolean = true;
  constructor(private formChildGroup: FormBuilder,
              private auth: AuthentificationServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.myFormLogin()
    this.myFormLoginReset()
    
  }

  myFormLogin(){
    this.checkoutParentGroup = this.formChildGroup.group({
      user:this.formChildGroup.group({
        email: new FormControl('',[
          Validators.required,
          spacevalidators.onlycontainspace,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ])
      })
    })
  }
  myFormLoginReset(){
    this.checkoutParentGroupReset = this.formChildGroup.group({
      newUser:this.formChildGroup.group({
        code: new FormControl('',[
          Validators.required,
          spacevalidators.onlycontainspace
        ]),
        newpassword: new FormControl('',[
          Validators.required,
          spacevalidators.onlycontainspace
        ])
      })
    })
  }
  get code(){
    return this.checkoutParentGroupReset!.get('newUser.code')
  }

  get newpassword(){
    return this.checkoutParentGroupReset!.get('newUser.newpassword')
  }

  get email(){
    return this.checkoutParentGroup.get('user.email')
  }
  resetPassword(){

    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched()
      return
    }
    this.auth.changePassword(
      this.checkoutParentGroup.controls['user'].value.email,
      this.checkoutParentGroupReset.controls['newUser'].value.code,
      this.checkoutParentGroupReset.controls['newUser'].value.newpassword
    ).subscribe({
      next: response =>{
        if(response.result == 1){
          alert("Success Edit Password")
          this.router.navigateByUrl("/login")
        } else {
          alert("Invalid Code")
        }
      }
    })




  }
done(){
  if (this.checkoutParentGroup.invalid) {
    this.checkoutParentGroup.markAllAsTouched()
    return
  }
  this.auth.resetpassword(
    this.checkoutParentGroup.controls['user'].value.email
  ).subscribe({
    next: response =>{
      if(response.result == 1){
        this.enableForm = false
      } else {
        alert("Email doesn't Exist")
      }
    }
  })







}


}

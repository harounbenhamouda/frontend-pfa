import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthentificationServiceService } from 'src/app/services/security/authentification-service.service';
@Component({
  selector: 'app-dropdownmenu',
  templateUrl: './dropdownmenu.component.html',
  styleUrls: ['./dropdownmenu.component.css']
})
export class DropdownmenuComponent implements OnInit {
  categories!:Category[];
  constructor(private category:CategoryService,private auth:AuthentificationServiceService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.category.getAllCategory().subscribe(
      data=>this.categories=data
    );
  }
  isAuthenticatedUser(){
    return this.auth.isLogin()
  }

}

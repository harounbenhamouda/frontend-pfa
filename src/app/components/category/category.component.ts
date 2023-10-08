import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthentificationServiceService } from 'src/app/services/security/authentification-service.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private category:CategoryService) { }
categories!:Category[];
  ngOnInit(): void {
    this.getAllCategory();

  }
  getAllCategory(){
    this.category.getAllCategory().subscribe(
      data=>this.categories=data
    );
  }
  

}

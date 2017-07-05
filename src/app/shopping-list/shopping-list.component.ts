import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  constructor() { }

  ngOnInit() {
  }
addNewIngredient(newIng:Ingredient){
  console.log("ïngredient added to Shopping Edit component "+newIng.name+" "+newIng.amount  )
  this.ingredients.push(newIng)
}
deleteIngredient(){
  console.log("in delete parent component")
  console.log(this.ingredients.slice(this.ingredients.length-1,1));
  //this.ingredients.slice(this.ingredients.length-1,0)
}
}

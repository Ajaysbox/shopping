import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }
  recipeSelected(recipeItem:Recipe){
    this.selectedRecipe = recipeItem;
    console.log(" from recipe comp : "+this.selectedRecipe.name)
  }
}

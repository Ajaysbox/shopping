import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output() recipeSelectEvent = new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('Recipe name 1','Recipe description 1','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
    new Recipe('Recipe name 2','Recipe description 2','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
    new Recipe('Recipe name 3','Recipe description 3','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
    new Recipe('Recipe name 4','Recipe description 4','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  recipeSelected(item:Recipe){
    this.recipeSelectEvent.emit(item);
    console.log("recipe item selected = "+item.name+" description "+item.description)
  }
}

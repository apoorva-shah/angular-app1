import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
      new Recipe('A test recipe', 'This is simply a test', 'http://www.jainrasoi.com/mg/wp-content/uploads/2012/09/khaman-dhokla.jpg'),
      new Recipe('A another recipe', 'This is simply a test', 'https://www.tarladalal.com/members/9306/big/big_moong_dal_paratha-7987.jpg?size=696X905')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

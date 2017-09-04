import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('A test recipe', 'This is simply a test', 'http://www.jainrasoi.com/mg/wp-content/uploads/2012/09/khaman-dhokla.jpg'),
      new Recipe('A test recipe', 'This is simply a test', 'http://www.jainrasoi.com/mg/wp-content/uploads/2012/09/khaman-dhokla.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}

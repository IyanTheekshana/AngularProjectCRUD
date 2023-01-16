import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'This is an italian pizza',
      'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ),
    new Recipe(
      'Pizza 2',
      'This is an italian pizza 2',
      'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}

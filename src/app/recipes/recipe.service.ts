import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Pizza',
  //     'This is an italian pizza',
  //     'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     [new Ingredient('farina', 230), new Ingredient('pomodoro', 2)]
  //   ),
  //   new Recipe(
  //     'Pizza 2',
  //     'This is an italian pizza 2',
  //     'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     [new Ingredient('farina', 330), new Ingredient('pomodoro', 11)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  //Add Ingredients To Shopping List
  addIngToSL(ings: Ingredient[]) {
    this.slService.addIngredients(ings);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

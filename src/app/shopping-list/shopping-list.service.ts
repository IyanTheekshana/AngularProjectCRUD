import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Farina', 200),
    new Ingredient('Pomodoro', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  //to add
  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingChanged.next(this.ingredients.slice());
  }
  //to edit
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingChanged.next(this.ingredients.slice());
  }

  //to delete
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingChanged.next(this.ingredients.slice());
  }
}

import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Farina', 200),
    new Ingredient('Pomodoro', 3),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ing of ings) {
    //   this.addIngredient(ing);
    // }
    this.ingredients.push(...ingredients);
    this.ingChanged.next(this.ingredients.slice());
  }
}

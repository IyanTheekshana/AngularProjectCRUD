import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Farina', 200),
    new Ingredient('Pomodoro', 3),
  ];

  onIngAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }
}

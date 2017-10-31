import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  IngredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
    // slice returns a copy and not actual one in service.
    // new ingredients are added to original array so notification must be added to get a new copy
    // of updated array.
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientAdded.emit(this.ingredients.slice()); // this emits the new updated copy of array.
  }

  constructor() { }
}

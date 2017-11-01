import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

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
    this.ingredientAdded.emit(this.ingredients.slice()); // this emits the new updated copy of array.
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
      // ES6 spread operator that turns array into list before pushing.
      this.ingredientAdded.emit(this.ingredients.slice());
  }

  constructor() { }
}

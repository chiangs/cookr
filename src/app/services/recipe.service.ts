import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pho', 'Vietnamese Noodle Soup with Beef', 'http://img.taste.com.au/FOmGb0F6/taste/2016/11/chicken-pho-108887-1.jpeg', [
        new Ingredient('Onion', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Rice Vermicelli', 1)
    ]),
    new Recipe('Apple Pie', 'Nothing like Applie Pie!', 'http://assets.simplyrecipes.com/wp-content/uploads/2006/09/apple-pie-640-dm.jpg', [
        new Ingredient('Apple', 4),
        new Ingredient('Pie Crust', 1),
        new Ingredient('Cinnamon', 1),
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
    // slice returns a copy and not actual one in service.
  }

  constructor() { }

}

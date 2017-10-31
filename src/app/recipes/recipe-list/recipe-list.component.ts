import { Component, OnInit, HostBinding } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  template: `
    <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
        <i class="icons">
            <i class="ui book icon"></i>
            <i class="ui top right corner inverted add icon"></i>
        </i>
        </div>
        <a class="ui basic red left pointing label">
            New Recipe
        </a>
    </div>
    <app-recipe-item *ngFor="let recipe of recipes"
        [recipe]="recipe">
    </app-recipe-item>
  `,
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  private currentRecipe: Recipe;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }

}

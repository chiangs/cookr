import { Component, OnInit, HostBinding } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  template: `
      <div class="six wide column">
          <app-recipe-list></app-recipe-list>
      </div>
      <div class="ten wide column">
          <app-recipe-detail
            *ngIf="selectedRecipe; else noRecipeSelectedText"
            [recipe]="selectedRecipe">
          </app-recipe-detail>
          <ng-template #noRecipeSelectedText>
            <h3 class="ui header"><i class="ui left arrow icon"></i>Select a recipe on the left to begin</h3>
          </ng-template>
      </div>
  `,
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  @HostBinding('attr.class') containerClass = 'ui phone stackable two column grid';
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.recipeService.recipeSelected.subscribe((recipe:Recipe) => this.selectedRecipe = recipe);
  }


}

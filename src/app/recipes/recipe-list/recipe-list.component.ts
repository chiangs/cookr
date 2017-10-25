import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

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
        [recipe]="recipe"
        [class.selected]="isSelected(recipe)"
        (click)="selectRecipe(recipe)">
    </app-recipe-item>
  `,
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelect: EventEmitter<Recipe>;
  private currentRecipe: Recipe;

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'http://img.taste.com.au/FOmGb0F6/taste/2016/11/chicken-pho-108887-1.jpeg'),
    new Recipe('Test Recipe 2', 'This is a test recipe', 'http://img.taste.com.au/FOmGb0F6/taste/2016/11/chicken-pho-108887-1.jpeg')

  ];

  constructor() {
      this.onRecipeSelect = new EventEmitter();
  }

  ngOnInit() { }

  selectRecipe(recipe: Recipe): void {
      this.currentRecipe = recipe;
      this.onRecipeSelect.emit(this.currentRecipe);
  }

  isSelected(recipe: Recipe): boolean {
      if (!recipe || !this.currentRecipe) {
        return false;
      }
      return recipe.name === this.currentRecipe.name;
  }

}

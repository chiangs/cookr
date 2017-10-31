import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  template: `
      <div class="image">
          <img alt="{{ recipe.name }}"
              [src]="recipe.imageUrl">
      </div>
      <div class="content">
          <h3 class="header">{{ recipe.name }}</h3>
          <div class="meta">
              <span class="category">Category</span>
          </div>
          <div class="description">
              {{ recipe.description }}
          </div>
      </div>
    <div class="extra content">
      Some extra content or button/icon later
    </div>

  `,
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe: Recipe;
    @HostBinding('attr.class') contClass = 'ui red card';
    @HostListener('click') onSelected() {
        this.recipeService.recipeSelected.emit(this.recipe)
    };

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
}

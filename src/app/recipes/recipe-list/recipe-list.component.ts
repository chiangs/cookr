import { Component, OnInit, HostBinding } from '@angular/core';
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

    <div class="ui red card" *ngFor="let recipe of recipes">
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
    </div>

    <app-recipe-item></app-recipe-item>
  `,
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'http://img.taste.com.au/FOmGb0F6/taste/2016/11/chicken-pho-108887-1.jpeg'),
    new Recipe('Test Recipe', 'This is a test recipe', 'http://img.taste.com.au/FOmGb0F6/taste/2016/11/chicken-pho-108887-1.jpeg')

  ];

  constructor() { }

  ngOnInit() {
  }

}

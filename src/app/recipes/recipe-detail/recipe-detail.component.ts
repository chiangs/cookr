import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  template: `
    <img class="ui medium image" alt="" [src]="recipe.imageUrl">
    <h2 class="ui header">{{ recipe.name }}</h2>
    <div class="ui simple dropdown item">
        Manage
        <i class="dropdown icon"></i>
        <div class="menu">
            <a class="item" href="#">
                <i class="icons">
                    <i class="ui shopping basket icon"></i>
                    <i class="ui top right corner add icon"></i>
                </i>
                Add ingredients to list</a>
            <a class="item" href="#">
                <i class="ui edit icon"></i>
                Edit recipe
            </a>
            <a class="item" href="#">
                <i class="ui remove cirucle icon"></i>
                Delete recipe
            </a>
        </div>
    </div>
    <p class="ui header">Description</p>
    <div class="ui list">
        <div class="item">
            {{ recipe.description }}
        </div>
    </div>

  `,
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

}

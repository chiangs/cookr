import { Component, OnInit, HostBinding } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  template: `
    <div class="thirteen wide column">
      <app-shopping-edit (addIngredient)="onAddNewIngredient($event)"></app-shopping-edit>
      <hr>
      <div class="ui middle aligned animated very relaxed list" >
          <a href="#" class="item" *ngFor="let ingredient of ingredients">
              {{ ingredient.name }} ({{ ingredient.amount }})
          </a>
      </div>
    </div>
  `,
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @HostBinding('attr.class') contClass = 'ui two column grid';
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onAddNewIngredient(ingredient: Ingredient) {
      console.log(ingredient);
      this.ingredients.push(ingredient);
  }

}

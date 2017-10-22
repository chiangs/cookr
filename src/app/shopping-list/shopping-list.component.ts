import { Component, OnInit, HostBinding } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  template: `
    <div class="thirteen wide column">
      <app-shopping-edit></app-shopping-edit>
      <hr>
      <div class="ui list" >
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

}

import { Component, OnInit, HostBinding } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  template: `
    <div class="thirteen wide column">
      <app-shopping-edit></app-shopping-edit>
      <hr>
      <div class="ui big middle aligned animated very relaxed list" >
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
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
      this.ingredients = this.slService.getIngredients();
      this.slService.ingredientAdded.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }
}

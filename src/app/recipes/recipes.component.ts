import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-recipes',
  template: `
      <div class="six wide column">
          <app-recipe-list></app-recipe-list>
      </div>
      <div class="ten wide column">
          <app-recipe-detail></app-recipe-detail>
      </div>
  `,
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @HostBinding('attr.class') containerClass = 'ui phone stackable two column grid';

  constructor() { }

  ngOnInit() {
  }

}

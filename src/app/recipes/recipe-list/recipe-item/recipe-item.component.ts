import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  template: `
    <a class="item" href="">RecipeItem</a>
  `,
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

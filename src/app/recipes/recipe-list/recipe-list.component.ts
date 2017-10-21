import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  template: `
    <app-recipe-item></app-recipe-item>
  `,
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="ui top fixed massive menu">
        <div class="item">
            <i class="ui red fire icon"></i>
            CookR
        </div>
        <div class="right menu">
            <a class="item" href="#"><i class="ui book icon"></i>Recipes</a>
            <a class="item" href="#"><i class="ui add shopping basket icon"></i>Shopping List</a>
        <div class="ui simple dropdown item">
            Manage
            <i class="dropdown icon"></i>
            <div class="menu">
                <a class="item" href="#"><i class="ui star icon"></i>Save Data</a>
                <a class="item" href="#"><i class="ui check circle icon"></i>Fetch Data</a>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('attr.class') containerClass = 'ui top fixed icon compact menu';

  constructor() { }

  ngOnInit() {
  }

}

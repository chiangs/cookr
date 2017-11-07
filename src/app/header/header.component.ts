import { Component, OnInit, HostBinding, } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
        <div class="item">
            <i class="ui red fire icon"></i>
            CookR
        </div>
        <div class="right menu">
            <a class="item" [routerLink]="['/recipes']"
                            routerLinkActive="active"
                            [routerLinkActiveOptions]="{exact: true}">
                                <i class="ui book icon"></i>
                                Recipes
            </a>
            <a class="item" [routerLink]="['shopping-list']"
                            routerLinkActive="active"
                            [routerLinkActiveOptions]="{exact: true}">
                                <i class="ui add shopping basket icon"></i>
                                Shopping List
            </a>
            <div class="ui item pointing dropdown" appDropdown #dropRef>
                Manage
                <i class="dropdown icon"></i>
                <div class="menu transition" [class.visible]="dropRef.classList.contains('visible')">
                    <a class="item"><i class="ui star icon"></i>Save Data</a>
                    <a class="item"><i class="ui check circle icon"></i>Fetch Data</a>
                </div>
            </div>
        </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('attr.class') containerClass = 'ui top fixed icon compact menu';
  // @Output() selection: EventEmitter <string>; no longer used due to router

  constructor() {
    //   this.selection = new EventEmitter(); no longer used due to router
  }

  ngOnInit() {
  }

  // selectComponent(feature: string) {
  //    no longer used due to routing
  //     this.selection.emit(feature);
  // }

}

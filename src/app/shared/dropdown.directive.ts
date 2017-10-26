import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.visible') isVisible = false;
    @HostBinding('class.active') isActive = false;
    @HostListener('click') toggleOpen() {
        this.isVisible = !this.isVisible;
        this.isActive = !this.isActive;
    }
  constructor() { }

}

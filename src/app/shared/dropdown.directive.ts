import { Directive, ElementRef, Host, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]' // Making an Attribute 
})
export class DropdownDirective {
    // Listening a click envent
    @HostBinding('class.open') isOpen = false; //alow us to bind to properties of the element the directive is placed on.

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}
}
import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'side-menu-button',
  template: `
      <button type="button" (click)="toggleMenu()">
        <span class="glyphicon glyphicon-menu-hamburger"></span>
      </button>`,
  styles: [`
  button {
    margin: 12px 18px;
  }
  .glyphicon-menu-hamburger {
    font-size: 18px;
    line-heigh: 13px;
  } `]
})
export class SideMenuButtonComponent  {

  isOpen : boolean = false;

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggleMenu(){
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}

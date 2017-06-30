import { Component, animate, trigger, state, style, transition } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations:[
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ]
})
export class NavigationComponent {

  constructor() { }

  isOpen : boolean = true;
  menuState:string = 'out';

  onOpen(event):void{
    this.menuState = 'in';
  }

  onClose(event):void{
    this.menuState = 'out';
  }

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}

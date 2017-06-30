import { Component} from '@angular/core';

@Component({
  selector: 'user-group',
  template: `
  <tabs>
    <tab
  </tabs>
  `,
  styles: ['']
})
export class UserGroupComponent {

  constructor(private group:string = 'All'){
      this.group = group;
  }

}

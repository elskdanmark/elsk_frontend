import { Component} from '@angular/core';

@Component({
  selector: 'users',
  template: `
  <div class="users">
    <h1>{{title}}</h1>
    <p>Users Page</p>
  </div>
  `,
  styles: ['']
})
export class UsersComponent {

  title = 'All users'

}

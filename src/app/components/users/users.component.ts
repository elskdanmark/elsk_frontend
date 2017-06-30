import { Component, Inject } from '@angular/core';

import { User } from '../../model/models';

export const USER_GROUP_LIST : Object[] = [
    {name: 'All'},
    {name: 'Recipient'},
    {name: 'Volunteer'},
    {name: 'Administrator'},
    {name: 'Uncategorised'}
];

@Component({
  selector: 'users',
  template: `
  <div class="users">
    <h1>{{title}}</h1>
    <tabs>
      <tab *ngFor="let group of userGroupList" [tabTitle]="(group.name !== 'All' && group.name !== 'Uncategorised')? group.name + 's' : group.name">
        <users-list [listType]="group.name"></users-list>
      </tab>
    </tabs>
  </div>
  `,
  styles: ['']
})
export class UsersComponent {

  title = 'Users'

  users: User[] = [
    new User({id:1, first_name:'john', last_name:'doe', type:'Recipient', email:'john@example.com', created_at:'2017-05-01'}),
    new User({id:2, first_name:'jane', last_name:'doe', type:'Volunteer', email:'jane@example.com', created_at:'2017-06-06'})
  ]

  constructor(@Inject(USER_GROUP_LIST) private userGroupList){}

}

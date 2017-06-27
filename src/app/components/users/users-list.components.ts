import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../model/models';

@Component({
    selector: 'users-list',
    inputs:['listType'],
    outputs: ['onUserSelected'],
    template: `
    <table *ngIf="users!==[]" class="table table-bordered table-hover">
        <thead>
            <tr class="success">
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td *ngIf="listType == 'All'">Type</td>
                <td>Member since</td>
            </tr>
        </thead>
        <tr *ngFor="let user of users" 
            (click)='select(user)' [class.selected]="isSelected(user)">
            <td>{{user.firstName}}</td>
            <td>{{user.lastName}}</td>
            <td>{{user.email}}</td>
            <td *ngIf="listType == 'All'">{{user.type}}</td>
            <td>{{user.createdAt}}</td>
        </tr>
    </table>
    <pre *ngIf="users">{{users | json}}</pre>
  `,
    styles: ['']
})

export class UsersListComponent implements OnInit {

    users: User[];

    private selectedUser: User;

    onUserSelected: EventEmitter<User>;

    listType: string;

    constructor(private userService: UserService) {
        this.onUserSelected = new EventEmitter();
        console.log(this.listType);
    }

    ngOnInit(): void {
        console.log(this.listType);
        this.userService.getAll(this.listType)
            .subscribe((users:User[]) => {
                this.users = users,
                err => {console.log(err);} // Log errors if any 
        })
    }


    select(user: User): void {
        this.selectedUser = user;
        this.onUserSelected.emit(user);
    }

    isSelected(user: User): boolean {
        if (!user || !this.selectedUser) {
            return false;
        }
        return user.id === this.selectedUser.id;
    }

}

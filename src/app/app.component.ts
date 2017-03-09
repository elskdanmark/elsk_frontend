import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome - Elsk Web portal!';

  public user : User;

  constructor (private userService : UserService){}

  ngOnInit(): void {
    this.userService.getUser()
      .then(user => this.user = user);
  } 

  getUser(): User {
    return this.user;
  }

}

import { Component} from '@angular/core';

import { User, Address} from '../../model/models';

@Component({
  selector: 'user-detail',
  inputs:['user'],
  template: `
  <div class="user">
    <h1>{{user.type}}</h1>
    <tabs>
      <tab [tabTitle]="Information">
        <form class="form-horizontal">
          <div class="col-lg-6">
            <label>First Name</label>
            <input type="text" value="{{user.firstName}}">
            <label>Last Name</label>
            <input type="text" value="{{user.lastName}}">
            <label>Telephone</label>
            <input type="text" value="{{user.phone}}">
            <label>Email</label>
            <input type="text" value="{{user.email}}">
          </div>
          <div class="col-lg-6">
            <h2>Address<h2>
            <label>Street</label>
            <input type="text" value="{{address.street}}">
            <label>House Number</label>
            <input type="text" value="{{address.houseNumber}}">
            <label>Floor</label>
            <input type="text" value="{{address.floor}}">
            <label>Post Code</label>
            <input type="text" value="{{address.postCode}}">
            <label>Town</label>
            <input type="text" value="{{address.town}}">
          </div>
        </form>
      </tab>
      <tab [tabTitle]="Current request">
        cuurent request form
      </tab>
      <tab [tabTitle]="All requests">
        All requests list
      </tab>
    </tabs>
  </div>`,
  styles: ['']
})
export class UserDetailComponent {
  user: User;
  address: Address;
}

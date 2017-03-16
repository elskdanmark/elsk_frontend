import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from './user';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'http://api.elsk.dev/app_dev.php/user';  // URL to web api
  constructor(private http: Http) { }

  getUser(): Promise<User> {
    const url = `${this.userUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } 
}

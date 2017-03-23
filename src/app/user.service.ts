import { Injectable }    from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';

import { User } from './user';
import { WsseService } from './wsse.service';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'http://api.elsk.dev/user';  // URL to web api
  constructor(private http: Http, private wsseHeader:WsseService) { }

  getUser(): Promise<User> {
    const url = `${this.userUrl}`;
    this.getWsseHeader('bob', 'johndoe');

    return this.http.get(url, {headers:this.headers})
      .toPromise()
      .then(response => {response.json().data as User; console.log(User); return response.json().data as User})
      .catch(this.handleError);
  }

 getWsseHeader(username, password){
    this.headers.append('Authorization', 'WSSE profile='.concat("\"UsernameToken\""));
    this.headers.append('X-Wsse', this.wsseHeader.getWsseHeader(username, password));
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for dev purposes only
    return Promise.reject(error.message || error);
  } 
}

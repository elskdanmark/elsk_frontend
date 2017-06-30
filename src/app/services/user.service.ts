import { Injectable, Inject} from '@angular/core';
import { RequestOptions, Response, Http} from '@angular/http';

import { User } from '../model/models';
import {environment} from '../../environments/environment';
import { WsseService } from './wsse.service';
import { ApiService } from './api.service';
import { Observable} from 'rxjs' ;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService extends ApiService{
  protected enpoint = 'users';
 // private headers = new Headers({ 'Content-Type': 'application/json' });
 // private userUrl = 'http://api.elsk.dev/user';  // URL to web api
/*  constructor(private http: Http, private wsseHeader: WsseService, @Inject(environment.API_URL) apiUrl) {

   }*/

  getUser(): Observable<User[]> {
    const url = this.apiUrl.concat(this.enpoint);
    this.makeHeader('bob', 'johndoe');

    return this.http
      .get(url, { headers: this.headers })
      .map((response:Response) => { 
        /*let data = JSON.parse((<any>response.json()).data) ;
        console.log("data item", typeof data);*/
        return JSON.parse((<any>response.json()).data).map(item => {
          //console.log("raw item", item); // uncomment to debug
          return new User(item);
        })
       // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      });
  }

  getAll(type:string):Observable<User[]>{
    
    let url = this.apiUrl.concat(this.enpoint);

    if(type !== 'All'){
       let params:string = [
         `type=${type}`
       ].join('&');
       url = `${url}?${params}`;
    }
   
    this.makeHeader('bob', 'johndoe');

    return this.http.get(url, this.headers)
      .map((response:Response) => {
          return JSON.parse((<any>response.json()).data).map(item => {
              //console.log("raw item", item); // uncomment to debug
              return new User(item);
            })
          })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  getRecipients():any{

  }
  
  getVolunteers():any{

  }

  getUncategorised():any{

  }

  private makeHeader(username, password) {
    this.headers.append('Authorization', 'WSSE profile='.concat("\"UsernameToken\""));
    this.headers.append('X-Wsse', this.wsseHeader.getWsseHeader(username, password));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for dev purposes only
    return Promise.reject(error.message || error);
  }
}

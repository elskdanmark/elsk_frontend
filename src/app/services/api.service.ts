import { Component, Inject, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import {environment} from '../../environments/environment';
import { WsseService } from './wsse.service';

@Injectable()
export class ApiService{
  protected headers = new Headers({ 'Content-Type': 'application/json' });
  protected enpoint:string;
  constructor( protected http: Http,
    protected wsseHeader: WsseService,
    @Inject(environment.API_URL) protected apiUrl:string){
    
  }
}

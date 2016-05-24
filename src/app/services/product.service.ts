import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Http,Headers} from '@angular/http';
import {Store} from '@ngrx/store';
import {AppState} from '../models/appstate.model';
import { Product } from '../models';

 const BASE_URL = 'http://localhost:3001/products';
 const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable()
export class ProductService {

   catalog:Observable<any>;
   
    constructor(private http:Http,private store:Store<AppState>) { 
        this.catalog = store.select('catalog');        
    }
   
   loadProducts(){
        this.http.get(BASE_URL,HEADER)
            .map(res => res.json())
            .map(payload => ({type:'ADD_PRODUCTS',payload}))
            .subscribe (action => this.store.dispatch(action));         
   }

}

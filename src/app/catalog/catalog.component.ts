import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services'
import { ProductCard } from './productCard.component';
import { Observable } from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {ADD_PRODUCT,REMOVE_PRODUCT,RESET_CART,CLEAR_PRODUCT} from '../store';
import {CartComponent} from '../cart';
import { AppState } from '../models/appstate.model';
import { Product } from '../models';

@Component({
    moduleId: module.id,
    selector: 'catalog',
    template: `
        <cart></cart>
        <h2>Shop catalog</h2>
        <div class="product-container">
            <div *ngFor="let product of (catalog | async)">
                <product-card [product]="product" (onBuyClick)="handleOnBuy(product)" ></product-card>
            </div>
        </div>
    `,
    directives:[ProductCard,CartComponent],
    providers:[ProductService],
    styles:[require('./catalog.css')]
})
export class CatalogComponent implements OnInit {
    
    catalog:Observable<Product>;
   
    constructor(private productService:ProductService,public store:Store<AppState>) { 
        
       this.catalog = store.select('catalog');
       productService.loadProducts();
       
    }
    
    handleOnBuy(product){
        this.store.dispatch({type:ADD_PRODUCT,payload:product});
    }
   

    ngOnInit() { }

}
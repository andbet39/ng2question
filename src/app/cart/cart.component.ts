import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {ADD_PRODUCT,REMOVE_PRODUCT,RESET_CART,CLEAR_PRODUCT} from '../store';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';

interface CartState{
    products:any
}

@Component({
    moduleId: module.id,
    selector: 'cart',
    template: `
        <h2>My cart</h2>
        <md-card>
            <md-card-content>          
                
                  <div>
                      <div class="cart-row" *ngFor="let row of (rows | async)"> 
                            <img src="{{row.product.imageUrl}}" class="product_avatar" /> 
                            <span class="product-name">{{row.product.name}}</span> 
                            <span class="product-qty">{{row.qty}}</span> 
                            
                            <button md-mini-fab  (click)="removeOne(row.product)" color="primary">
                                <md-icon fontSet="fontawesome" fontIcon="fa-minus"></md-icon>
                             </button>
                             
                             <button md-mini-fab  (click)="clear(row.product)" color="warn">
                                <md-icon fontSet="fontawesome" fontIcon="fa-trash" ></md-icon>
                             </button>
                            
                        </div>
                  </div>
                  <button md-raised-button (click)="onResetCart()" >Reset</button>
            </md-card-content>
        </md-card>
    `,
     styles:[`
        button{
            margin-right:20px;
        }
        .cart-row{
            margin-top:10px;   
            height:50px; 
        }
        .product_avatar{
            width:50px;
            height:50px;
            border-radius:10px;
            vertical-align:middle;   
            display:inline;         
        }
        .product-name{
            margin-left:20px
            margin-right:20px;
        }
        .product-qty{
            margin-right:20px;
        }   
        .product-info{
               vertical-align:middle;
               displaY:inline;
        }
    `],
      viewProviders: [MdIconRegistry],

})
export class CartComponent implements OnInit {
     rows:Observable<any>;
    
    constructor(public store:Store<CartState>,mdIconRegistry: MdIconRegistry) {
        this.rows = store.select('cart');
         mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
        
     }
     
    removeOne(product){
        this.store.dispatch({type:REMOVE_PRODUCT,payload:product});
    }
    
    clear(product){
        this.store.dispatch({type:CLEAR_PRODUCT,payload:product});
    }

    onResetCart(){
        this.store.dispatch({type:RESET_CART});
    }
    
    ngOnInit() { }

}
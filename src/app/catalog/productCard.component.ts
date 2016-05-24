import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'product-card',
    template:
    `   
    <md-card class="product-card">
        <img md-card-image src={{product.imageUrl}}/>

        <md-card-title>
            <h3>{{product.name}}</h3>
        </md-card-title>
        <md-card-content>
        </md-card-content>
        <md-card-action align="end">
            <button md-raised-button (click)="onBuy()" >Buy {{product.price}}</button>
        </md-card-action>
    </md-card>
        
    `,
    styles:[require('./catalog.css')]
})
export class ProductCard implements OnInit {
    
    @Input() product;    
    @Output() onBuyClick:EventEmitter = new EventEmitter()
    constructor() { }
    ngOnInit() { }
    
    onBuy(){
        this.onBuyClick.next();
    }
    


}
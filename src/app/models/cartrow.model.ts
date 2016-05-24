import { Product } from './product.model';

export class CartRow{
    constructor(public product:Product,public qty:number){
        
    }
}
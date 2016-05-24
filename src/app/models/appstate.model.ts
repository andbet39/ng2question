import { Product } from './product.model';
import { CartRow } from './cartrow.model';

export interface AppState{
    products:Array<Product>
    cart:Array<CartRow>
}
import {Reducer, Action} from '@ngrx/store';
import { Product } from '../models';
import { CartRow } from '../models';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RESET_CART = 'RESET_CART';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT';
export const REMOVE_QTY = 'REMOVE_QTY';

export const cart:Reducer<any> = (state = [], action:Action) => {
    switch (action.type) {
        case ADD_PRODUCT:
        {
            let qty=0;
            let newrow:CartRow;
            
            state.forEach((row)=>{
                if(row.product.id === action.payload.id){
                    qty=row.qty;
                    newrow = new CartRow(row.product,qty+1);
                    state.splice(state.indexOf(row),1);
                }
            });
            
            if(qty===0){
                return [...state,
                    new CartRow(action.payload,qty+1)];
            }else{
                return[...state,newrow];
            }
         }
            
        case REMOVE_PRODUCT:
        { 
            let qty=0;
            let newrow:CartRow;
            
            state.forEach((row)=>{
                if(row.product.id === action.payload.id){
                    qty=row.qty;
                    newrow = new CartRow(row.product,qty-1);                    
                    state.splice(state.indexOf(row),1);
                }
            });
            
            if(qty===1){
                return [...state];
            }else{
                return[...state,newrow];
            }
        }
        case CLEAR_PRODUCT:
        {
            state.forEach((row)=>{
                if(row.product.id === action.payload.id){
                    state.splice(state.indexOf(row),1);
                }
            });
            
            return [...state];
        }
           
        case RESET_CART:
            return [];

        default:
            return state;
    }
}


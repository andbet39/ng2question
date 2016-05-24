import {Reducer, Action} from '@ngrx/store';

export const LOAD_PRODUCT='LOAD_PRODUCT';
export const ADD_PRODUCTS='ADD_PRODUCTS';
export const REMOVE_PRODUCT='REMOVE_PRODUCT';


export const catalog:Reducer<any> = (state:any = [] , action:Action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
        {}
        case ADD_PRODUCTS:{
            state = action.payload;   
        }
        default:
            return state;
    }
}


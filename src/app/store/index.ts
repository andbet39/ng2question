import {provideStore} from '@ngrx/store';
import {Devtools, instrumentStore} from '@ngrx/devtools';

import {cart} from './cart.reducer';
import {catalog} from './catalog.reducer';
import { AppState } from '../models/appstate.model';



export const STORE_PROVIDER = [provideStore({cart,catalog},{}),instrumentStore()];

export * from './cart.reducer';
export * from './catalog.reducer';
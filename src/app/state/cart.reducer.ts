import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ProductEntity } from '../shared/models/product.model';

import { CartActions } from './cart.actions';

export const CART_FEATURE_KEY = 'cart';

export interface CartState extends EntityState<ProductEntity> {
  loaded: boolean;
  errors?: string[] | null;
  selectedId: number;
}

export interface CartPartialState {
  readonly [CART_FEATURE_KEY]: CartState;
}

export const cartAdapter: EntityAdapter<ProductEntity> =
  createEntityAdapter<ProductEntity>();

export const initialState: CartState = cartAdapter.getInitialState({
  loaded: false,
  errors: null,
  selectedId: null,
});

const cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, { item }) => {
    return cartAdapter.addOne(item, state);
  }),
  on(CartActions.setItemId, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  on(CartActions.removeItem, (state, { id }) => {
    return cartAdapter.removeOne(id, state);
  })
);

export function cartReducerFn(state: CartState | undefined, action: Action) {
  return cartReducer(state, action);
}

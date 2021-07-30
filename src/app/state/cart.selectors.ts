import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CART_FEATURE_KEY, cartAdapter, CartPartialState, CartState, } from './cart.reducer';

const { selectAll, selectEntities } = cartAdapter.getSelectors();

const getCartState = createFeatureSelector<
  CartPartialState,
  CartState
>(CART_FEATURE_KEY);

const getLoaded = createSelector(
  getCartState,
  (state: CartState) => state.loaded
);

const getError = createSelector(
  getCartState,
  (state: CartState) => state.errors
);

const getAllItems = createSelector(
  getCartState,
  (state: CartState) => selectAll(state)
);

const getItemsEntities = createSelector(
  getCartState,
  (state: CartState) => selectEntities(state)
);

const getSelectedId = createSelector(
  getCartState,
  (state: CartState) => state.selectedId
);

const getSelected = createSelector(
  getItemsEntities,
  getSelectedId,
  (entities, selectedId) => !!(selectedId && entities[selectedId])
);

export const CartQuery = {
  getLoaded,
  getError,
  getAllItems,
  getItemsEntities,
  getSelectedId,
  getSelected
}


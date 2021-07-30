import { createAction, props } from '@ngrx/store';
import { ProductEntity } from '../shared/models/product.model';

const addItem = createAction(
  '[Cart] Add item to chart',
  props<{ item: ProductEntity }>()
);

const setItemId = createAction('[Cart] Set item id', props<{ id: number }>());

const removeItem = createAction(
  '[Cart] Remove item by id',
  props<{ id: number }>()
);

export const CartActions = {
  addItem,
  setItemId,
  removeItem,
};

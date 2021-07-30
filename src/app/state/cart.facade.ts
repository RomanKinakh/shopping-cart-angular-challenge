import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { ProductEntity } from '../shared/models/product.model';
import { CartActions, CartPartialState, CartQuery } from '../state';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  loaded$ = this.store.pipe(select(CartQuery.getLoaded));
  errors = this.store.pipe(
    select(CartQuery.getError)
  );
  allItems$ = this.store.pipe(
    select(CartQuery.getAllItems)
  );
  getSelected$ = this.store.pipe(
    select(CartQuery.getSelected)
  );


  constructor(private store: Store<CartPartialState>) {
  }

  addItemToCart(item: ProductEntity) {
    this.store.dispatch(
      CartActions.addItem({ item })
    );
  }

  selectItemId(id: number): void {
    this.store.dispatch(
      CartActions.setItemId({ id })
    );
  }

  removeItemFromCart(id: number): void {
    this.store.dispatch(
      CartActions.removeItem({ id })
    );
  }
}

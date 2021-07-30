import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { SnackBarService } from '../shared/services/snack-bar.service';
import { CartActions } from './cart.actions';

@Injectable()
export class CartEffects {

  addItemToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.addItem),
        tap((data) => {
          this.snackBarService.showSuccessMessage('Product was successfully added!')
        })
      ),
    { dispatch: false }
  );

  removeItemFromCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.removeItem),
        tap((data) => {
          this.snackBarService.showSuccessMessage('Product was successfully removed!')
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private snackBarService: SnackBarService
  ) {}
}

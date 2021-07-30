import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductEntity } from '../../shared/models/product.model';
import { CartFacade } from '../../state/cart.facade';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  allItems$ = this.cartFacade.allItems$;

  constructor(private cartFacade: CartFacade) {}

  ngOnInit(): void {}

  trackByFn(i: number, el: ProductEntity): number {
    return el.id || i;
  }

  onItemRemove(id: number): void {
    this.cartFacade.removeItemFromCart(id);
  }
}

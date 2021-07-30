import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartFacade } from '../../../../state/cart.facade';
import { ProductEntity } from '../../../../shared/models/product.model';


@Component({
  selector: 'app-product-info-modal',
  templateUrl: './product-info-modal.component.html',
  styleUrls: ['./product-info-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductInfoModalComponent implements OnInit {

  isInCart$ = this.cartFacade.getSelected$;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductEntity, private cartFacade: CartFacade) { }

  ngOnInit(): void {
  }

  addItemToCart(product: ProductEntity): void {
    this.cartFacade.addItemToCart(product);
  }

  removeItemFromCart(id: number): void {
    this.cartFacade.removeItemFromCart(id);
  }

}

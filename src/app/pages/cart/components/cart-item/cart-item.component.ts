import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ProductEntity } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() item: ProductEntity;
  @Output() removeItem = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  removeItemFromCart(id: number): void {
    this.removeItem.emit(id);
  }
}

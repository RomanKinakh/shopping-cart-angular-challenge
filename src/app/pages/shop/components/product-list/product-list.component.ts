import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartFacade } from '../../../../state/cart.facade';
import { ProductInfoModalComponent } from '../product-info-modal/product-info-modal.component';
import { ProductEntity } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Input() products: ProductEntity[] = [];
  @Input() page = 1;
  @Input() total = 0;
  @Output() pageChanged = new EventEmitter<number>();

  constructor(private dialog: MatDialog, private cartFacade: CartFacade) {}

  ngOnInit(): void {}

  onPageChange(page: number): void {
    this.page = page;
    this.pageChanged.emit(page);
  }

  trackByFn(i: number, el: ProductEntity): number {
    return el.id || i;
  }

  onProductClick(item: ProductEntity) {
    this.cartFacade.selectItemId(item.id);
    this.dialog.open(ProductInfoModalComponent, {
      data: { ...item },
      width: '600px',
    });
  }
}

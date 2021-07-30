import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductEntity } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductEntity[] = [];
  @Input() page = 1;
  @Input() total = 0;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(page: number): void {
    this.page = page;
    this.pageChanged.emit(page);
  }

  trackByFn(i: number, el: ProductEntity): number {
    return el.id || i;
  }

}

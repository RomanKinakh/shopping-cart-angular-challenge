import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProductEntity } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {

  @Input() product: ProductEntity;

  constructor() { }

  ngOnInit(): void {
  }

}

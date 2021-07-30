import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarsModule } from 'ngx-stars';
import { MaterialModule } from '../../shared';
import { ShopService } from './services';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import {
  FiltersComponent,
  ProductInfoModalComponent,
  ProductItemComponent,
  ProductListComponent,
} from './components';

@NgModule({
  declarations: [
    ShopComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductInfoModalComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStarsModule,
    NgxPaginationModule,
    MatDialogModule,
  ],
  providers: [ShopService],
  entryComponents: [ProductInfoModalComponent],
})
export class ShopModule {}

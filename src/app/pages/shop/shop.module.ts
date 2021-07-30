import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarsModule } from 'ngx-stars';
import { MaterialModule } from '../../shared';
import { ShopService } from './services';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { FiltersComponent, ProductItemComponent, ProductListComponent } from './components';


@NgModule({
  declarations: [ShopComponent, FiltersComponent, ProductListComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStarsModule,
    NgxPaginationModule
  ],
  providers: [ShopService]
})
export class ShopModule {
}

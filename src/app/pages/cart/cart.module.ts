import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStarsModule } from 'ngx-stars';
import { MaterialModule } from '../../shared';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './components';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, CartRoutingModule, MaterialModule, NgxStarsModule],
})
export class CartModule {}

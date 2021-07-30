import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { FilterPrices, FiltersEntity, PRICES_MIN_MAX_VALUES } from '../models';
import {
  ProductEntity,
  ResponseData,
} from '../../../shared/models/product.model';

@Injectable()
export class ShopService {
  constructor(private http: HttpClient) {}

  getData(filters: FiltersEntity): Observable<ResponseData> {
    const {
      type,
      priceFrom500to750,
      priceFrom750to1000,
      priceFrom1000to1500,
      search,
      page,
    } = filters;
    return this.http
      .get<ProductEntity[]>('assets/mocks/products.mock.json')
      .pipe(
        delay(500),
        map((data) => this.filterByType(type, data)),
        map((data) =>
          this.filterByPrice(
            { priceFrom500to750, priceFrom750to1000, priceFrom1000to1500 },
            data
          )
        ),
        map((data) => this.filterBySearch(search, data)),
        map((data) => this.pagination(page, data))
      );
  }

  private filterByType(type: string, data: ProductEntity[]): ProductEntity[] {
    return type === 'all' ? data : data.filter((elem) => elem.type === type);
  }

  private filterByPrice(
    filterPrices: FilterPrices,
    data: ProductEntity[]
  ): ProductEntity[] {
    if (
      !filterPrices.priceFrom500to750 &&
      !filterPrices.priceFrom750to1000 &&
      !filterPrices.priceFrom1000to1500
    ) {
      return data;
    } else {
      let newData: ProductEntity[] = [];
      Object.keys(filterPrices).forEach((key) => {
        if (filterPrices[key]) {
          const filteredProducts = data.filter(
            (elem) =>
              elem.price >= PRICES_MIN_MAX_VALUES[key].min &&
              elem.price < PRICES_MIN_MAX_VALUES[key].max
          );
          newData = [...newData, ...filteredProducts];
        }
      });
      return newData;
    }
  }

  private filterBySearch(text: string, data: ProductEntity[]): ProductEntity[] {
    return text
      ? data.filter(
          (elem) =>
            elem.name.toLowerCase().includes(text.toLowerCase()) ||
            elem.price.toString().toLowerCase().includes(text.toLowerCase())
        )
      : data;
  }

  private pagination(page: number, data: ProductEntity[]): ResponseData {
    return {
      data: data.slice(12 * (page - 1), 12 * page),
      total: data.length,
      page,
    };
  }
}

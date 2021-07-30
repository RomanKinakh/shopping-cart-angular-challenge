import {
  deepMerge,
  fromStringToBoolean,
} from '../../../shared/helpers/helpers';

export interface ElectronicTypeOption {
  label: string;
  value: string;
}

export interface PriceOption {
  label: string;
  name: string;
}

export interface FilterPrices {
  priceFrom500to750: boolean | string;
  priceFrom750to1000: boolean | string;
  priceFrom1000to1500: boolean | string;
}

export interface FiltersEntity extends FilterPrices {
  search: string;
  type: string;
  page?: number;
}

export class FiltersModel implements FiltersEntity {
  search = '';
  type = 'all';
  priceFrom500to750 = false;
  priceFrom750to1000 = false;
  priceFrom1000to1500 = false;

  constructor(data) {
    Object.assign(this, deepMerge(this, data));
    this.priceFrom500to750 = fromStringToBoolean(this.priceFrom500to750);
    this.priceFrom750to1000 = fromStringToBoolean(this.priceFrom750to1000);
    this.priceFrom1000to1500 = fromStringToBoolean(this.priceFrom1000to1500);
  }
}

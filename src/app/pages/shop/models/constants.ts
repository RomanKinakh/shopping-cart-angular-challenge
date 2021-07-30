import { ElectronicTypeOption, PriceOption } from './filters.model';

export const ELECTRONIC_TYPE_OPTIONS: ElectronicTypeOption[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'TVs',
    value: 'tvs',
  },
  {
    label: 'Appliances',
    value: 'appliances',
  },
  {
    label: 'Phones',
    value: 'phones',
  },
  {
    label: 'Video Games',
    value: 'video_games',
  },
];

export const PRICE_OPTIONS: PriceOption[] = [
  {
    label: '$500 - $749.99',
    name: 'priceFrom500to750',
  },
  {
    label: '$750 - $999.99',
    name: 'priceFrom750to1000',
  },
  {
    label: '$1000 - $1499.99',
    name: 'priceFrom1000to1500',
  },
];

export const PRICES_MIN_MAX_VALUES = {
  priceFrom500to750: {
    min: 500,
    max: 750,
  },
  priceFrom750to1000: {
    min: 750,
    max: 1000,
  },
  priceFrom1000to1500: {
    min: 1000,
    max: 1500,
  },
};

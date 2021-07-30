export type ElectronicTypes = 'all' | 'tvs' | 'appliances' | 'phones' | 'video_games';

export interface ProductEntity {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  reviews: number;
  type: ElectronicTypes
}

export interface ResponseData {
  data: ProductEntity[],
  total: number,
  page: number
}


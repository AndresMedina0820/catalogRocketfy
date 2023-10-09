export interface IProduct {
  _id: string;
  name: string;
  description: string;
  sku: string;
  image: string;
  tags: string[];
  stock: number;
  price: number;
  dateCreated: Date;
}

export type TypeForm = 'create' | 'edit' | 'details';

export interface QueryParams {
  page: number,
  limit: number,
  query?: Object,
}

export interface IResponse {
  data: IProduct[],
  total: number,
  status: string,
}

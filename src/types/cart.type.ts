import { IProduct } from './product.type';

export interface ICartParams {
  page?: number | string;
  limit?: number | string;
  perPage?: number | string;
  filter?: string;
  expand?: string;
}

export interface ICart {
  user_id?: string;
  address?: string;
  status?: string;
  order_email?: string;
  order_phone?: string;
  order_date?: string;
}

export interface IProductAddToCart {
  order_id: string | null;
  product_id: string;
  quantity: number;
}
export interface IProductUpdateToCart {
  order_product_id: string;
  quantity: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
  orderId: string;
}

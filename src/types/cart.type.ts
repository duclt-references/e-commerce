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
  user_id: string | null;
  order_id: string | null;
  product_id: string;
  quantity: number;
}

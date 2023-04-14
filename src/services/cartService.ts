import { API_PATH } from '@/config/path';
import { apiService } from '@/httpRequest';
import {
  ICartParams,
  IProductAddToCart,
  IProductUpdateToCart,
} from '@/types/cart.type';

export const cartService = {
  getCarts(params: ICartParams) {
    return apiService.get(API_PATH.cart, {
      params,
    });
  },
  getCartItems(params: ICartParams) {
    return apiService.get(API_PATH.cartItems, {
      params,
    });
  },
  getCartDetail(id: string) {
    return apiService.get(`${API_PATH.product}/${id}`);
  },
  addProductToCart(item: IProductAddToCart) {
    return apiService.post(API_PATH.cartItems, item);
  },
  updateProductToCart(item: IProductUpdateToCart) {
    return apiService.patch(
      API_PATH.cartItems + `/${item.order_product_id}`,
      item
    );
  },
};

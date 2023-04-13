import { API_PATH } from '@/config/path';
import { apiService } from '@/httpRequest';
import { ICartParams } from '@/types/cart.type';

export const cartService = {
  getCarts(params: ICartParams) {
    return apiService.get(API_PATH.cart, {
      params,
    });
  },

  getCartDetail(id: string) {
    return apiService.get(`${API_PATH.product}/${id}`);
  },
};

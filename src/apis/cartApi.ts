import { apiService } from '@/httpRequest';

export const URL_CART = 'carts';

export const cartApi = {
  getCartItems(id: string) {
    return apiService.get(URL_CART + `/${id}`);
  },
};

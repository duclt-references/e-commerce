import { API_PATH } from '@/config/path';
import { apiService } from '@/httpRequest';
import { IProductListConfig } from '@/types/product.type';

export const productService = {
  getProducts(params: IProductListConfig) {
    return apiService.get(API_PATH.product, {
      params,
    });
  },

  getProductDetail(id: string) {
    return apiService.get(`${API_PATH.product}/${id}`);
  },
};

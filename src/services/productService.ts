import { apiPath } from '@/config/path';
import { apiService } from '@/httpRequest';
import { IProductListConfig } from '@/types/product.type';

export const productService = {
  getProducts(params: IProductListConfig) {
    return apiService.get(apiPath.product, {
      params,
    });
  },

  getProductDetail(id: string) {
    return apiService.get(`${apiPath.product}/${id}`);
  },
};

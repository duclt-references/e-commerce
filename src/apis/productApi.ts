import { apiService } from '@/httpRequest';
import { IProductListConfig } from '@/types/product.type';

const PRODUCT_URL = 'products';

export const productApi = {
  getProducts(params: IProductListConfig) {
    return apiService.get(PRODUCT_URL, {
      params,
    });
  },
  getProductDetail(id: string) {
    return apiService.get(`${PRODUCT_URL}/${id}`);
  },
};

import { API_PATH } from '@/config/path';
import { apiService } from '@/httpRequest';
import { ICategoryListConfig } from '@/types/category.type';

export const categoryService = {
  getCategories(params: ICategoryListConfig) {
    return apiService.get(API_PATH.categories, {
      params,
    });
  },

  getCategoryDetail(id: string) {
    return apiService.get(`${API_PATH.categories}/${id}`);
  },
};

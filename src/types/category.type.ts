export interface ICategoryList {
  categories: ICategory[];
  pagination: {
    page: number;
    limit: number;
    page_size: number;
  };
}

export interface ICategory {
  id: string;
  name: string;
  order: number;
  slug?: string;
}

export interface ICategoryListConfig {
  page?: number | string;
  limit?: number | string;
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price';
  order?: 'asc' | 'desc';
  exclude?: string;
}

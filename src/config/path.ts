export const PATH = {
  home: '/',
  products: '/products',
  productsByCategory: '/products/:category',
  productDetail: '/:slug',
  profile: '/user/profile',
  login: '/login',
  register: '/register',
  payment: '/payment',
  adminProduct: '/admin/product',
  adminAddProduct: '/admin/product/add',
  adminEditProduct: '/admin/product/edit',
};

export const API_PATH = {
  login: 'collections/users/auth-with-password',
  register: 'collections/users/records',
  registerRefresh: 'collections/users/auth-refresh',
  products: 'collections/products/records',
  cart: 'collections/orders/records',
  cartItems: 'collections/order_products/records',
  categories: 'collections/categories/records',
};

export const IMAGE_URL = process.env.PRODUCT_IMAGE_END_POINT;
export const APP_URL = process.env.APP_URL;

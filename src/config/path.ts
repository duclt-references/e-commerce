export const PATH = {
  home: '/',
  products: '/products',
  productDetail: '/:slug',
  profile: '/user/profile',
  login: '/login',
  register: '/register',
};

export const API_PATH = {
  login: 'collections/users/auth-with-password',
  register: 'collections/users/records',
  registerRefresh: 'collections/users/auth-refresh',
  product: 'collections/products/records',
  cart: 'collections/orders/records',
  cartItems: 'collections/order_products/records',
};

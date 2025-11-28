// constants.js

const API = import.meta.env.VITE_API_URL;

// Base for RTK Query
export const BASE_URL = API;

// Path-only endpoints (to be combined with BASE_URL by apiSlice)
export const USERS_URL = "/api/users";
export const CATEGORY_URL = "/api/category";
export const PRODUCT_URL = "/api/products";
export const UPLOAD_URL = "/api/upload";
export const ORDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";

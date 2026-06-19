import axios from "axios";

const BASE_URL = "https://boi-backend-oyws.onrender.com/api/v1";

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper for auth headers
const authConfig = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
});

// ====================
// AUTH
// ====================

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const signupUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/auth/signup", data);
    return res.data;
  } catch (err: any) {
    console.error("Signup error:", err.response?.data || err.message);
    throw err.response?.data || err;
  }
};

// Fetch products list
export const getProducts = async (token?: string) => {
  try {
    const res = await api.get(
      "/products/fashion-aso-oke/products",
      token ? authConfig(token) : undefined,
    );
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

// Fetch orders list
export const getOrders = async (token?: string) => {
  try {
    const res = await api.get(
      "/products/fashion-prada/orders",
      token ? authConfig(token) : undefined,
    );
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

// ASO OKE ORDER

export interface AsoOkeOrderItem {
  product_id: string;
  quantity: number;
}

export const createAsoOkeOrder = async (
  token: string,
  items: AsoOkeOrderItem[],
) => {
  try {
    const res = await api.post(
      "/products/fashion-aso-oke/orders",
      { items },
      authConfig(token),
    );

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

// ASO OKE CHECKOUT

export interface CheckoutPayload {
  email: string;
  amount: number;
  callback_url: string;
  metadata?: Record<string, any>;
}

export const initializePradaCheckout = async (
  token: string,
  data: CheckoutPayload,
) => {
  try {
    const res = await api.post(
      "/products/fashion-prada/checkout",
      data,
      authConfig(token),
    );

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export interface UpdatePradaProductPayload {
  name?: string;
  description?: string;
  price?: number;
  stock_quantity?: number;
  product_url?: string;
  is_active?: boolean;
}

export const updatePradaProduct = async (
  token: string,
  productId: string,
  data: UpdatePradaProductPayload,
) => {
  try {
    const res = await api.patch(
      `/products/fashion-prada/products/${productId}`,
      data,
      authConfig(token),
    );

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const deletePradaProduct = async (token: string, productId: string) => {
  try {
    const res = await api.delete(
      `/products/fashion-prada/products/${productId}`,
      authConfig(token),
    );

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export interface CreatePradaProductPayload {
  name: string;
  price: number;
  stock_quantity: number;
  description: string;
  product_url?: string;
  is_active: boolean;
}

export const createAsoOkeProduct = async (
  token: string,
  data: CreatePradaProductPayload,
) => {
  try {
    const res = await api.post(
      "/products/fashion-aso-oke/products",
      data,
      authConfig(token),
    );

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};
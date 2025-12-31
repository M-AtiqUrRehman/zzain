const NODE_USE_MOCK = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_USE_MOCK === 'true';
const NODE_API_BASE = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_BASE;
const VITE_USE_MOCK = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_USE_MOCK === 'true';
const VITE_API_BASE = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE;

const USE_MOCK = NODE_USE_MOCK || VITE_USE_MOCK || (!NODE_API_BASE && !VITE_API_BASE);
const API_BASE = NODE_API_BASE || VITE_API_BASE || 'http://localhost:5000';

const mock = {
  user: { _id: 'demo_user', name: 'Demo User', email: 'demo@local' },
  products: [
    { _id: 'p_demo_1', title: 'Demo Product 1', price: 9.99, image: 'https://i.postimg.cc/8CmBZH5N/shoes.webp' },
    { _id: 'p_demo_2', title: 'Demo Product 2', price: 19.99, image: 'https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png' }
  ]
};

async function fetchJson(url, options) {
  const res = await fetch(url, options);
  const data = await res.json();
  return { ok: res.ok, status: res.status, ...data };
}

export async function getCurrentUser(token) {
  if (USE_MOCK) {
    return { ok: true, user: mock.user };
  }
  return await fetchJson(`${API_BASE}/api/users/me`, { headers: { Authorization: `Bearer ${token}` } });
}

export async function login(email, password) {
  if (USE_MOCK) {
    return { ok: true, token: 'demo-token', user: mock.user };
  }
  return await fetchJson(`${API_BASE}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
}

export async function register(name, email, password) {
  if (USE_MOCK) {
    return { ok: true };
  }
  return await fetchJson(`${API_BASE}/api/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
}

export async function getProducts() {
  if (USE_MOCK) {
    return { ok: true, products: mock.products };
  }
  return await fetchJson(`${API_BASE}/api/products`);
}

export async function addProduct(product, token) {
  if (USE_MOCK) {
    const created = { ...product, _id: `p_demo_${Date.now()}` };
    mock.products.push(created);
    return { ok: true, product: created };
  }
  return await fetchJson(`${API_BASE}/api/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: JSON.stringify(product),
  });
}

export async function sendContact(formData) {
  if (USE_MOCK) {
    return { ok: true, message: 'Message received (demo)' };
  }
  return await fetchJson(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
}

export default { getCurrentUser, login, register, getProducts, addProduct, sendContact };

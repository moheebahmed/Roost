// Base URL for all backend API calls
const BASE_URL = 'http://localhost:5000/api'

// ─── Menu ────────────────────────────────────────────────
export async function fetchMenuItems() {
  const res = await fetch(`${BASE_URL}/menu`)
  if (!res.ok) throw new Error('Failed to fetch menu items')
  return res.json()
}

export async function fetchMenuByCategory(category) {
  const res = await fetch(`${BASE_URL}/menu/${category.toLowerCase()}`)
  if (!res.ok) throw new Error(`Failed to fetch ${category} items`)
  return res.json()
}

export async function fetchMenuCategories() {
  const res = await fetch(`${BASE_URL}/menu/categories`)
  if (!res.ok) throw new Error('Failed to fetch categories')
  return res.json()
}

// ─── Locations ───────────────────────────────────────────
export async function fetchLocations(search = '') {
  const url = search
    ? `${BASE_URL}BASE/locations?search=${encodeURIComponent(search)}`
    : `${BASE_URL}/locations`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch locations')
  return res.json()
}

// ─── Cart ────────────────────────────────────────────────
export async function fetchCart(sessionId) {
  const res = await fetch(`${BASE_URL}/cart/${sessionId}`)
  if (!res.ok) throw new Error('Failed to fetch cart')
  return res.json()
}

export async function addItemToCart(sessionId, item) {
  const res = await fetch(`${BASE_URL}/cart/${sessionId}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
  if (!res.ok) throw new Error('Failed to add item to cart')
  return res.json()
}

export async function updateCartItem(sessionId, id, category, quantity) {
  const res = await fetch(`${BASE_URL}/cart/${sessionId}/update`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, category, quantity }),
  })
  if (!res.ok) throw new Error('Failed to update cart item')
  return res.json()
}

export async function removeCartItem(sessionId, id, category) {
  const res = await fetch(`${BASE_URL}/cart/${sessionId}/remove`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, category }),
  })
  if (!res.ok) throw new Error('Failed to remove cart item')
  return res.json()
}

export async function clearCartApi(sessionId) {
  const res = await fetch(`${BASE_URL}/cart/${sessionId}/clear`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Failed to clear cart')
  return res.json()
}

// ─── Orders ──────────────────────────────────────────────
export async function createOrder(orderData) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || 'Failed to create order')
  }
  return res.json()
}

export async function fetchOrderById(orderId) {
  const res = await fetch(`${BASE_URL}/orders/${orderId}`)
  if (!res.ok) throw new Error(`Order #${orderId} not found`)
  return res.json()
}

export async function fetchOrderStatus(orderId) {
  const res = await fetch(`${BASE_URL}/orders/${orderId}/status`)
  if (!res.ok) throw new Error(`Failed to fetch status for order #${orderId}`)
  return res.json()
}

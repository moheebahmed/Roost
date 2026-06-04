import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {
  fetchCart,
  addItemToCart,
  updateCartItem,
  removeCartItem,
  clearCartApi,
} from '../api'

const CartContext = createContext()

function getSessionId() {
  let id = localStorage.getItem('roost_session_id')
  if (!id) {
    id = 'sess_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem('roost_session_id', id)
  }
  return id
}

export function CartProvider({ children }) {
  const [sessionId] = useState(getSessionId)
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCart(sessionId)
      .then((data) => setCartItems(data.items || []))
      .catch(() => setCartItems([]))
  }, [sessionId])

  const syncCart = useCallback((data) => {
    setCartItems(data.items || [])
  }, [])

  async function addToCart(item) {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id && i.category === item.category)
      if (exists) return prev.map((i) => i.id === item.id && i.category === item.category ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...item, quantity: 1 }]
    })
    try {
      const data = await addItemToCart(sessionId, {
        id: item.id,
        category: item.category,
        name: item.name,
        price: item.price,
        image: item.image || '',
        tag: item.tag || null,
      })
      syncCart(data)
    } catch {
      fetchCart(sessionId).then(syncCart).catch(() => {})
    }
  }

  async function increaseQty(id, category) {
    const item = cartItems.find((i) => i.id === id && i.category === category)
    if (!item) return
    const newQty = item.quantity + 1
    setCartItems((prev) => prev.map((i) => i.id === id && i.category === category ? { ...i, quantity: newQty } : i))
    try {
      const data = await updateCartItem(sessionId, id, category, newQty)
      syncCart(data)
    } catch {
      fetchCart(sessionId).then(syncCart).catch(() => {})
    }
  }

  async function decreaseQty(id, category) {
    const item = cartItems.find((i) => i.id === id && i.category === category)
    if (!item) return
    const newQty = item.quantity - 1
    setCartItems((prev) =>
      newQty <= 0
        ? prev.filter((i) => !(i.id === id && i.category === category))
        : prev.map((i) => i.id === id && i.category === category ? { ...i, quantity: newQty } : i)
    )
    try {
      const data = await updateCartItem(sessionId, id, category, newQty)
      syncCart(data)
    } catch {
      fetchCart(sessionId).then(syncCart).catch(() => {})
    }
  }

  async function removeItem(id, category) {
    setCartItems((prev) => prev.filter((i) => !(i.id === id && i.category === category)))
    try {
      const data = await removeCartItem(sessionId, id, category)
      syncCart(data)
    } catch {
      fetchCart(sessionId).then(syncCart).catch(() => {})
    }
  }

  async function clearCart() {
    setCartItems([])
    try {
      await clearCartApi(sessionId)
    } catch {
      fetchCart(sessionId).then(syncCart).catch(() => {})
    }
  }

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = cartItems.reduce((sum, i) => {
    const price = typeof i.price === 'string' ? parseFloat(i.price.replace('$', '')) : parseFloat(i.price)
    return sum + (isNaN(price) ? 0 : price) * i.quantity
  }, 0)

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, increaseQty, decreaseQty, removeItem, clearCart,
      totalItems, totalPrice, loading, sessionId,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

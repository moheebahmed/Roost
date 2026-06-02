import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    // Add item — agar already hai toh quantity badhao
    function addToCart(item) {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id && i.category === item.category)
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id && i.category === item.category
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            }
            return [...prev, { ...item, quantity: 1 }]
        })
    }

    // Quantity increase
    function increaseQty(id, category) {
        setCartItems((prev) =>
            prev.map((i) =>
                i.id === id && i.category === category
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
            )
        )
    }

    // Quantity decrease — 1 se kam ho toh remove
    function decreaseQty(id, category) {
        setCartItems((prev) =>
            prev
                .map((i) =>
                    i.id === id && i.category === category
                        ? { ...i, quantity: i.quantity - 1 }
                        : i
                )
                .filter((i) => i.quantity > 0)
        )
    }

    // Remove item
    function removeItem(id, category) {
        setCartItems((prev) => prev.filter((i) => !(i.id === id && i.category === category)))
    }

    // Clear cart
    function clearCart() {
        setCartItems([])
    }

    // Total items count
    const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0)

    // Total price
    const totalPrice = cartItems.reduce((sum, i) => {
        const price = parseFloat(i.price.replace('$', ''))
        return sum + price * i.quantity
    }, 0)

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, increaseQty, decreaseQty, removeItem, clearCart, totalItems, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}

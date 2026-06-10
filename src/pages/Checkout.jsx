import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrderPageHeader from '../components/OrderPageHeader'
import OrderItemsList from '../components/OrderItemsList'
import OrderPriceSummary from '../components/OrderPriceSummary'
import CheckoutForm from '../components/CheckoutForm'
import { useCart } from '../context/CartContext'
import { createOrder } from '../api'
import { FiShoppingBag, FiCreditCard } from 'react-icons/fi'

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  const delivery = totalPrice > 0 ? 2.99 : 0
  const tax = totalPrice * 0.08
  const grandTotal = totalPrice + delivery + tax

  const [orderType, setOrderType] = useState('delivery')
  const [payMethod, setPayMethod] = useState('cash')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    address: '', city: '', notes: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  function validate() {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    if (orderType === 'delivery' && !form.address.trim()) e.address = 'Required'
    if (orderType === 'delivery' && !form.city.trim()) e.city = 'Required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setSubmitting(true)
    setServerError('')

    try {
      // Normalise cart items for backend
      const items = cartItems.map((item) => ({
        id: item.id,
        category: item.category,
        name: item.name,
        price: item.price,
        image: item.image || '',
        tag: item.tag || null,
        quantity: item.quantity,
      }))

      const payload = {
        items,
        subtotal: totalPrice.toFixed(2),
        delivery: delivery.toFixed(2),
        tax: tax.toFixed(2),
        total: grandTotal.toFixed(2),
        customer: form,
        orderType,
        payMethod,
      }

      const response = await createOrder(payload)
      await clearCart()

      navigate('/order-confirmation', { state: { order: response.order } })
    } catch (err) {
      setServerError(err.message || 'Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F2F2F2] flex flex-col items-center justify-center gap-5 py-32">
        <FiShoppingBag size={48} className="text-[#D0D0D0]" />
        <p className="font-['Montserrat'] font-black text-[18px] uppercase text-[#1A1C1C]">Your cart is empty</p>
        <Link to="/menu" className="bg-[#E61E2A] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase px-8 py-4 hover:bg-red-700 transition-colors">
          view menu
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <OrderPageHeader
        icon={FiCreditCard} title="CHECKOUT" subtitle="Complete your order details"
        backTo="/cart" backLabel="BACK TO CART"
        steps={['Cart', 'Checkout', 'Confirmation']} activeStep="Checkout"
      />
      <form onSubmit={handleSubmit}>
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-10 md:py-12">
          <div className="flex flex-col lg:flex-row gap-7 items-start">
            <div className="flex-1 flex flex-col gap-5">
              <CheckoutForm
                form={form} errors={errors}
                orderType={orderType} payMethod={payMethod}
                onChange={handleChange}
                onOrderTypeChange={setOrderType}
                onPayMethodChange={setPayMethod}
              />
            </div>
            <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-4 sticky top-24">
              <OrderItemsList items={cartItems} />
              <div className="bg-white border border-[#E8E8E8] p-5">
                <OrderPriceSummary
                  subtotal={totalPrice.toFixed(2)} delivery={delivery.toFixed(2)}
                  tax={tax.toFixed(2)} total={grandTotal.toFixed(2)} label="TOTAL"
                />
                {serverError && (
                  <p className="mt-3 text-[#BD001A] font-['Hanken_Grotesk'] text-[12px] text-center">
                    {serverError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 w-full bg-[#E61E2A] text-white font-['Hanken_Grotesk'] font-bold text-[13px] tracking-widest uppercase py-4 hover:bg-red-700 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'PLACING ORDER...' : 'CONFIRM ORDER →'}
                </button>
                <p className="mt-3 text-center font-['Hanken_Grotesk'] text-[11px] text-[#ADADAD]">
                  By placing your order you agree to our terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

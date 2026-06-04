import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import OrderItemsList from '../components/OrderItemsList'
import OrderPriceSummary from '../components/OrderPriceSummary'
import OrderCustomerInfo from '../components/OrderCustomerInfo'
import { FiCheck, FiClock, FiShoppingBag, FiHome, FiNavigation } from 'react-icons/fi'

export default function OrderConfirmation() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const order = state?.order
  const redirected = useRef(false)

  useEffect(() => {
    if (!order && !redirected.current) { redirected.current = true; navigate('/menu', { replace: true }) }
  }, [order, navigate])

  if (!order) return null

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="max-w-[640px] mx-auto px-5 md:px-8 py-12 md:py-16">

        {/* Confirmation hero */}
        <div className="bg-[#1A1C1C] text-white text-center px-8 py-10 mb-5 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#BD001A] opacity-10 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#BD001A] opacity-10 rounded-full" />
          <div className="relative z-10 w-16 h-16 bg-[#BD001A] rounded-full flex items-center justify-center mx-auto mb-5">
            <FiCheck size={28} className="text-white" strokeWidth={3} />
          </div>
          <h1 className="relative z-10 font-['Montserrat'] font-black text-[26px] md:text-[34px] uppercase leading-tight mb-2">ORDER CONFIRMED</h1>
          <p className="relative z-10 font-['Hanken_Grotesk'] text-[14px] text-[#ADADAD]">Thank you! Your food is being prepared.</p>
          <div className="relative z-10 flex items-center justify-center gap-6 mt-7 pt-6 border-t border-white/10">
            <div>
              <p className="font-['Hanken_Grotesk'] text-[10px] tracking-widest uppercase text-[#6C6E6E] mb-1">Order ID</p>
              <p className="font-['Montserrat'] font-black text-[18px] text-white">#{order.id}</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex items-center gap-2">
              <FiClock size={16} className="text-[#BD001A]" />
              <div>
                <p className="font-['Hanken_Grotesk'] text-[10px] tracking-widest uppercase text-[#6C6E6E] mb-1">Est. Time</p>
                <p className="font-['Montserrat'] font-black text-[18px] text-white">20–30 min</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4"><OrderItemsList items={order.items} title="ITEMS ORDERED" /></div>
        <div className="bg-white border border-[#E8E8E8] mb-4 px-5 py-5">
          <OrderPriceSummary subtotal={order.subtotal} delivery={order.delivery} tax={order.tax} total={order.total} label="TOTAL PAID" />
        </div>
        <div className="mb-7"><OrderCustomerInfo order={order} /></div>

        <div className="flex flex-col gap-3">
          <Link to="/order-tracking" state={{ order }}
            className="w-full bg-[#BD001A] text-white font-['Hanken_Grotesk'] font-bold text-[13px] tracking-widest uppercase py-4 text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
            <FiNavigation size={14} /> TRACK MY ORDER
          </Link>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/" className="flex-1 bg-[#1A1C1C] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-4 text-center hover:bg-[#BD001A] transition-colors flex items-center justify-center gap-2">
              <FiHome size={14} /> BACK TO HOME
            </Link>
            <Link to="/menu" className="flex-1 bg-white border border-[#D0D0D0] text-[#5D5F5F] font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-4 text-center hover:border-[#1A1C1C] hover:text-[#1A1C1C] transition-colors flex items-center justify-center gap-2">
              <FiShoppingBag size={14} /> ORDER MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

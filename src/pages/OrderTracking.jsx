import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import TrackingSteps from '../components/TrackingSteps'
import OrderItemsList from '../components/OrderItemsList'
import OrderCustomerInfo from '../components/OrderCustomerInfo'
import { fetchOrderStatus } from '../api'
import { FiCheck, FiClock, FiHome, FiShoppingBag, FiHeart } from 'react-icons/fi'

const statusStepMap = {
  placed: 0,
  confirmed: 1,
  preparing: 2,
  ready: 3,
  delivered: 3,
}

export default function OrderTracking() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const order = state?.order
  const redirected = useRef(false)

  const [step, setStep] = useState(() => {
    if (order?.status) return statusStepMap[order.status] ?? 0
    return 0
  })
  const [eta, setEta] = useState(28)

  useEffect(() => {
    if (!order && !redirected.current) {
      redirected.current = true
      navigate('/menu', { replace: true })
    }
  }, [order, navigate])

  // Poll backend for real order status every 10 seconds
  useEffect(() => {
    if (!order?.id) return

    const poll = async () => {
      try {
        const data = await fetchOrderStatus(order.id)
        const newStep = data.step ?? statusStepMap[data.status] ?? 0
        setStep(newStep)

        // Update ETA from estimatedReadyAt if available
        if (data.estimatedReadyAt) {
          const diff = Math.round((new Date(data.estimatedReadyAt) - Date.now()) / 60000)
          setEta(diff > 0 ? diff : 0)
        }
      } catch {
        // Silently ignore polling errors
      }
    }

    poll() // Immediate first poll
    const interval = setInterval(poll, 10000) // Poll every 10s
    return () => clearInterval(interval)
  }, [order?.id])

  // Countdown ETA every minute
  useEffect(() => {
    if (step === 3) return
    const id = setInterval(() => setEta((p) => (p > 1 ? p - 1 : 0)), 60000)
    return () => clearInterval(id)
  }, [step])

  if (!order) return null

  const delivered = step === 3

  return (
    <div className="min-h-screen bg-[#F2F2F2]">

      {/* Status bar */}
      <div className={`transition-colors duration-700 ${delivered ? 'bg-[#1B5E20]' : 'bg-[#1A1C1C]'}`}>
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${delivered ? 'bg-green-400' : 'bg-[#BD001A]'}`} />
            <span className="font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase text-white">
              {delivered ? 'ORDER DELIVERED' : 'ORDER IN PROGRESS'}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-['Hanken_Grotesk'] text-[12px] text-[#6C6E6E]">
              Order <span className="text-white font-bold">#{order.id}</span>
            </span>
            {!delivered && (
              <div className="flex items-center gap-1.5">
                <FiClock size={13} className="text-[#BD001A]" />
                <span className="font-['Hanken_Grotesk'] font-bold text-[12px] text-white">~{eta} min</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-5 md:px-8 py-10 md:py-14">

        {/* Tracker card */}
        <div className="bg-white border border-[#E8E8E8] overflow-hidden mb-5">
          <div className="px-6 py-5 border-b border-[#F0F0F0] flex items-center justify-between">
            <div>
              <h1 className="font-['Montserrat'] font-black text-[18px] md:text-[22px] uppercase text-[#1A1C1C]">TRACK YOUR ORDER</h1>
              <p className="font-['Hanken_Grotesk'] text-[13px] text-[#9A9C9C] mt-0.5">
                {delivered ? 'Your order has been delivered. Enjoy!' : `Estimated delivery: ${eta} minutes`}
              </p>
            </div>
            {!delivered && (
              <div className="hidden sm:flex flex-col items-center">
                <span className="font-['Montserrat'] font-black text-[32px] text-[#BD001A] leading-none">{eta}</span>
                <span className="font-['Hanken_Grotesk'] text-[10px] tracking-widest uppercase text-[#9A9C9C]">min</span>
              </div>
            )}
          </div>
          <div className="px-6 py-8"><TrackingSteps currentStep={step} /></div>
          {delivered && (
            <div className="mx-6 mb-6 bg-[#F0FFF4] border border-[#A8D5B5] px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center shrink-0">
                <FiCheck size={14} className="text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="font-['Montserrat'] font-black text-[13px] uppercase text-[#1B5E20]">Delivered!</p>
                <p className="font-['Hanken_Grotesk'] text-[12px] text-[#388E3C]">Your order arrived. Bon appétit!</p>
              </div>
            </div>
          )}
        </div>

        <div className="mb-5">
          <OrderItemsList items={order.items} showTotal total={order.total} orderId={order.id} />
        </div>
        <div className="mb-7"><OrderCustomerInfo order={order} /></div>

        <div className="flex flex-col gap-3">
          {delivered && (
            <Link to="/thank-you" state={{ order }}
              className="w-full bg-[#BD001A] text-white font-['Hanken_Grotesk'] font-bold text-[13px] tracking-widest uppercase py-4 text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <FiHeart size={14} /> LEAVE A REVIEW
            </Link>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/" className="flex-1 bg-[#1A1C1C] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-4 text-center hover:bg-[#BD001A] transition-colors flex items-center justify-center gap-2">
              <FiHome size={13} /> BACK TO HOME
            </Link>
            <Link to="/menu" className="flex-1 bg-white border border-[#D0D0D0] text-[#5D5F5F] font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-4 text-center hover:border-[#1A1C1C] hover:text-[#1A1C1C] transition-colors flex items-center justify-center gap-2">
              <FiShoppingBag size={13} /> ORDER MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
